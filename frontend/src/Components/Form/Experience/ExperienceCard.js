import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react'
import ExperienceInfo from './ExperienceInfo';
// import EducationInfo from './EducationInfo';

const ExperienceCard = ({ experience, onRemovePressed, onEditPressed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExperience, setEditedExperience] = useState(experience);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEditPressed(experience, editedExperience);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedExperience(experience);
  };
  return (
    <div className="flex-col mb-3 p-2 rounded-lg shadow-lg p-6 relative w-[60%] row">
      {
        <>
          <div className={`d-flex justify-content-end ${isEditing ? "d-none" : ""}`}>
            <button className="bg-transparent" onClick={handleEditClick}>
              <FontAwesomeIcon className='color-black' icon={faPenToSquare} />
            </button>
            <button className="bg-transparent" onClick={() => { onRemovePressed(experience) }}>
              <FontAwesomeIcon className='color-red' icon={faTrash} />
            </button>
          </div>
          <ExperienceInfo experience={experience} isEditing={isEditing} setEditedExperience={setEditedExperience} />
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

export default ExperienceCard