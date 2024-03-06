// components/ClassListPage.js
// import React, { useEffect, useState } from 'react';
// import { fetchClassList } from '../utils/api';
// import ClassCard from './ClassCard.js';

// function ClassListPage() {
//   const [classList, setClassList] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetchClassList();
//       setClassList(data);
//     }
//     fetchData();
//   }, []);

//   const handleEnroll = (classId) => {
//     // Implement enrollment logic here
//     console.log(`Enrolling user in class ${classId}`);
//   };

//   return (
//     <div className="container mx-auto p-4 bg-yellow-300">
//       <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Class List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {classList.map((lesson, index) => (
//           <ClassCard key={index} lesson={lesson} onEnroll={handleEnroll} className="bg-white rounded-lg shadow-md p-4" />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ClassListPage;

// components/ClassListPage.js

import React, { useEffect, useState } from 'react';
import { fetchClassList } from '../utils/api';
import ClassCard from './ClassCard.js';

function ClassListPage() {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchClassList();
      // Sort the class list by datetime in ascending order
      data.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
      setClassList(data);
    }
    fetchData();
  }, []);

  const handleEnroll = (classId) => {
    // Implement enrollment logic here
    console.log(`Enrolling user in class ${classId}`);
  };

  return (
    <div className="container mx-auto p-4 bg-yellow-300">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Class List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classList.map((lesson) => (
          <ClassCard key={lesson.id} lesson={lesson} onEnroll={handleEnroll} className="bg-white rounded-lg shadow-md p-4"/>
        ))}
      </div>
    </div>
  );
}

export default ClassListPage;
