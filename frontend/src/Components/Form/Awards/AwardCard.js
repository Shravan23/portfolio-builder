import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const AwardCard = ({ award, onRemovePressed, onEditPressed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedAward, setEditedAward] = useState(award.award);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        onEditPressed(award, editedAward);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedAward(award.award);
    };

    return (
        <div className="flex-col rounded-lg shadow-lg p-6 relative w-1/2 row">
            {
                isEditing ? (
                    <>
                        <input
                            type="text"
                            className={`py-2 px-3 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-lg`}
                            value={editedAward}
                            onChange={(e) => setEditedAward(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <div className={`d-flex justify-content-end ${isEditing ? "d-none" : ""}`}>
                            <button className="bg-transparent" onClick={handleEditClick}>
                                <FontAwesomeIcon className='color-black' icon={faPenToSquare} />
                            </button>


                            <button className="bg-transparent" onClick={() => { onRemovePressed(award) }}>
                                <FontAwesomeIcon className='color-red' icon={faTrash} />
                            </button>
                        </div>
                        <div className="col fw-bold mb-3">{award.award}</div>
                    </>
                )
            }
            {isEditing ? (
                <div className='pt-4 items-center'>
                    <button className="bg-black me-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSaveClick}>
                        Save
                    </button>
                    <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : ""}
        </div >
    );
}

export default AwardCard;
