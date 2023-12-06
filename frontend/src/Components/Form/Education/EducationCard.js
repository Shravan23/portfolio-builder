import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react'
import EducationInfo from './EducationInfo';

const EducationCard = ({ education, onRemovePressed, onEditPressed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEducation, setEditedEducation] = useState(education);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEditPressed(education, editedEducation);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedEducation(education);
  };
  return (
    <div className="card dark:bg-lime-300 dark:text-black bg-light pb-1 pr-1 mb-1 small">
      {
        <>
          <div className={`d-flex justify-content-end ${isEditing ? "d-none" : ""}`}>
            <button className="bg-transparent" onClick={handleEditClick}>
              <FontAwesomeIcon className='color-black' icon={faPenToSquare} />
            </button>
            <button className="bg-transparent" onClick={() => { onRemovePressed(education) }}>
              <FontAwesomeIcon className='color-red' icon={faTrash} />
            </button>
          </div>
          <EducationInfo education={education} isEditing={isEditing} setEditedEducation={setEditedEducation} />
        </>
      }
      {isEditing ? (
        <div className='pt-4 items-center'>
          <button className="bg-black mx-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSaveClick}>
            Save
          </button>
          <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : ""}
    </div>
  )
}

export default EducationCard