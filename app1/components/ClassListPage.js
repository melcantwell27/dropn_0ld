// components/ClassListPage.js
import React, { useEffect, useState } from 'react';
import { fetchClassList } from '../utils/api';
import ClassCard from './ClassCard.js';

function ClassListPage() {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchClassList();
      setClassList(data);
    }
    fetchData();
  }, []);

  const handleEnroll = (classId) => {
    // Implement enrollment logic here
    console.log(`Enrolling user in class ${classId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Class List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classList.map((lesson) => (
          <ClassCard key={lesson.id} lesson={lesson} onEnroll={handleEnroll} />
        ))}
      </div>
    </div>
  );
}

export default ClassListPage;
