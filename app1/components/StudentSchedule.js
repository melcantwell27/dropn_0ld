import { useEffect, useState } from 'react';
import { fetchStudentClasses } from '../utils/api';


const StudentSchedule = () => {
  const [classes, setClasses] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch user data including username
        const response = await fetchUserData();
        setUsername(response.data.username);

        // Fetch student classes
        const classesResponse = await fetchStudentClasses();
        setClasses(classesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome {username}!</h2>
      <h3>My Classes</h3>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            {classItem.class_name} - {classItem.datetime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSchedule;
