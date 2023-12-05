import type { TextItem as PdfjsTextItem } from "pdfjs-dist/types/src/display/api";
import type { TextItem, TextItems } from "./types";
import * as pdfjs from "pdfjs-dist";
//@ts-ignore
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry"
// import pdfjsWorker from "pdfjs-dist/build/";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

/**
 * Step 1: Read pdf and output textItems by concatenating results from each page.
 *
 * To make processing easier, it returns a new TextItem type, which removes unused
 * attributes (dir, transform), adds x and y positions, and replaces loaded font
 * name with original font name.
 *
 * @example
 * const onFileChange = async (e) => {
 *     const fileUrl = URL.createObjectURL(e.target.files[0]);
 *     const textItems = await readPdf(fileUrl);
 * }
 */
export const readPdf = async (fileUrl: string): Promise<TextItems> => {
  const pdfFile = await pdfjs.getDocument(fileUrl).promise;
  console.log('PDF file read')
  let textItems: TextItems = [];

  for (let i = 1; i <= pdfFile.numPages; i++) {
    // Parse each page into text content
    const page = await pdfFile.getPage(i);
    const textContent = await page.getTextContent();

    // Wait for font data to be loaded
    await page.getOperatorList();
    const commonObjs = page.commonObjs;

    // Convert Pdfjs TextItem type to new TextItem type
    const pageTextItems = textContent.items.map((item) => {
      const {
        str: text,
        dir, // Remove text direction
        transform,
        fontName: pdfFontName,
        ...otherProps
      } = item as PdfjsTextItem;
      const x = transform[4];
      const y = transform[5];
      const fontObj = commonObjs.get(pdfFontName);
      const fontName = fontObj.name;

      const newText = text.replace(/-­‐/g, "-");

      const newItem = {
        ...otherProps,
        fontName,
        text: newText,
        x,
        y,
      };
      return newItem;
    });
    textItems.push(...pageTextItems);
  }
  const isEmptySpace = (textItem: TextItem) =>
    !textItem.hasEOL && textItem.text.trim() === "";
  textItems = textItems.filter((textItem) => !isEmptySpace(textItem));

  return textItems;
};
