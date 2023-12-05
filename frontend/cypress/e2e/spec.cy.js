import Chance from 'chance';
import 'cypress-file-upload';


describe('Normal Flow', () => {

  const chance = new Chance();
  const email = chance.email();
  const password = 'Password@123';
  const firstName = chance.name();
  const lastName = chance.name();

  beforeEach(() => {
    cy.visit('http://localhost:3002/');
  });

  it('has a title', () => {
    cy.contains('Welcome to Resume Genie');
  });

  // it('signs up a new user', () => {
  //   cy.contains('Signup').click()
  //   cy.url().should('include', 'signup')
  //   cy.get('input[name="firstName"]').type(firstName)
  //   cy.get('input[name="lastName"]').type(lastName)
  //   cy.get('input[name="email"]').type(email)
  //   cy.get('input[name="password"]').type(password)
  //   cy.get('form').submit()
  //   cy.wait(1000)
  //   cy.url().should('eq', 'http://localhost:3002/') 
  // });

  // it('login a new user', () => {
  //   cy.contains('Login').click()
  //   cy.url().should('include', 'login')
  //   cy.get('input[name="email"]').type(email)
  //   cy.get('input[name="password"]').type(password)
  //   cy.get('form').submit()
  //   cy.wait(1000)
  //   cy.getAllLocalStorage().then((result)=> {
  //     expect(result).to.deep.not
  //   })
          
  //   cy.intercept('POST', 'https://portfolio-builder-backend.onrender.com/v1/user/signup', {
  //     statusCode: 200
  //   })
  //   cy.url().should('eq', 'http://localhost:3002/resumeUploadPage') 
   
  // })

  // it('logout', () => {
  //   cy.contains('Login').click()
  //   cy.url().should('include', 'login')
  //   cy.get('input[name="email"]').type(email)
  //   cy.get('input[name="password"]').type(password)
  //   cy.get('form').submit()
  //   cy.wait(1000)
  //   cy.url().should('eq', 'http://localhost:3002/resumeUploadPage') 
  //   cy.contains('Logout').click()
  //   cy.url().should('eq', 'http://localhost:3002/')

  // })
  // it('resume Upload', () => {
  //   cy.contains('Login').click()
  //   cy.url().should('include', 'login')
  //   cy.get('input[name="email"]').type(email)
  //   cy.get('input[name="password"]').type(password)
  //   cy.get('form').submit()
  //   cy.wait(1000)
  //   cy.url().should('eq', 'http://localhost:3002/resumeUploadPage') 
  //   const fileName = 'Test.pdf';
  //   cy.get('input[type="file"]').attachFile(fileName);
  //   cy.get('button').contains('Submit').click();
    

  // })

  it('resume Upload', () => {
    cy.contains('Generate website without account').click()
    // cy.url().should('include', 'login')
    // cy.get('input[name="email"]').type(email)
    // cy.get('input[name="password"]').type(password)
    // cy.get('form').submit()
    // cy.wait(1000)
    cy.url().should('eq', 'http://localhost:3002/resumeUploadPage2') 
    const fileName = 'ShravanKumar Bachu Resume.pdf';
    cy.get('input[type="file"]').attachFile({filePath: fileName, mimeType: 'application/pdf'});
    cy.get('button').contains('Submit').click();
    

  })
  

});


