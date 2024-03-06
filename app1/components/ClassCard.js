import React, { useState } from 'react';

function ClassCard({ lesson, onEnroll }) {
  // Convert datetime string to a more readable format for a dance class website
  const formattedDate = new Date(lesson.datetime).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  const formattedTime = new Date(lesson.datetime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const [enrolled, setEnrolled] = useState(false);

  const handleToggleEnroll = (classId) => {
    if (enrolled) {
      // If already enrolled, call unenroll function
      console.log(`Unenrolling user from class ${classId}`);
      // Call unenroll function
    } else {
      // If not enrolled, call enroll function
      console.log(`Enrolling user in class ${classId}`);
      // Call enroll function
    }
    setEnrolled(!enrolled); // Toggle enrolled state
  };

  return (
    <div className="border-4 border-pink-800 rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{lesson.class_name}</h2>
      <p>Date: {formattedDate}</p>
      <p>Time: {formattedTime}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={() => handleToggleEnroll(lesson.id)}
      >
        {enrolled ? 'Unenroll' : 'Enroll'}
      </button>
    </div>
  );
}

export default ClassCard;
