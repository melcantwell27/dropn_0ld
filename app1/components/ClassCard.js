// components/ClassCard.js
import React from 'react';

function ClassCard({ lesson, onEnroll }) {
  return (
    <div className="border rounded-lg p-4 mb-4 cursor-pointer" onClick={() => onEnroll(lesson.id)}>
      <h2 className="text-xl font-bold mb-2">{lesson.class_name}</h2>
      <p>Date: {lesson.datetime}</p>
    </div>
  );
}

export default ClassCard;
