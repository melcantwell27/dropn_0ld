import StudentSchedule from '../components/StudentSchedule';

const MySpot = ({ username }) => {
  return (
    <div>
      <h1>My Spot</h1>
      <StudentSchedule username={username} />
    </div>
  );
};

export default MySpot;
