import moment from 'moment';
import React from 'react';

const ExperienceInfo = ({ experience, isEditing, setEditedExperience }) => {

    console.log(experience)
    const { company, end, descriptions, start, jobTitle } = experience;

    console.log(experience)
    return (
        <div className="rounded-lg gap-2 flex-col relative">
            <div className="mb-2">

                {isEditing ? (
                    <input
                        type="text"
                        className={`py-2 px-3 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-lg`}
                        defaultValue={company}
                        onChange={(e) => setEditedExperience((prev) => ({ ...prev, company: e.target.value }))}
                    />
                ) : (
                    <h2 className="text-2xl font-semibold">{company.length > 30 ? `${company.slice(0, 30)}...` : company}</h2>
                )}
            </div>
            <div className='flex justify-between'>
                {isEditing ? (
                    <div className="mb-2 p-1 border rounded-sm">
                        <input
                            type="date"
                            className="outline-none p-1 "
                            placeholder="Start Date"
                            onChange={(e) => setEditedExperience((prev) => ({ ...prev, start: moment(e.target.value).format("MM YYYY") }))}
                        />
                    </div>
                ) : (
                    <p className='absolute top-1 right-20'>{start} </p>
                )}
                {isEditing ? (
                    <div className="mb-2 p-1 border rounded-sm">
                        <input
                            type="date"
                            className="outline-none p-1 "
                            placeholder="End Date"
                            onChange={(e) => setEditedExperience((prev) => ({ ...prev, end: moment(e.target.value).format("MM YYYY") }))}
                        />
                    </div>
                ) : (
                    <p className='absolute top-1 right-1'>- {end}</p>
                )}
            </div>
            <div className='flex gap-2'>
                {isEditing ? (
                    <input
                        type="text"
                        className={`py-2 px-3 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-lg`}
                        defaultValue={descriptions}
                        onChange={(e) => setEditedExperience((prev) => ({ ...prev, descriptions: e.target.value }))}
                    />
                ) : (
                    <div className={`max-w-xs overflow-hidden whitespace-nowrap ${isEditing ? 'overflow-visible' : 'overflow-ellipsis'}`}>
                        {descriptions.length > 50 ? `${descriptions.slice(0, 50)}...` : descriptions}

                    </div>
                )}
                -
                <div className="mb-2">
                    {isEditing ? (
                        <input
                            type="text"
                            className={`py-2 px-3 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-lg`}
                            defaultValue={jobTitle}
                            onChange={(e) => setEditedExperience((prev) => ({ ...prev, jobTitle: e.target.value }))}
                        />
                    ) : (<p>{jobTitle}</p>)}
                </div>
            </div>
        </div>
    );
};

export default ExperienceInfo;
