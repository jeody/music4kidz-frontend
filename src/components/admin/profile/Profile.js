import React, { useEffect, useState } from 'react';
import './Profile.scss';
import StudentProfile from '../../student/profile/StudentProfile';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <div>
      <StudentProfile />
    </div>
  );
};

export default Profile;
