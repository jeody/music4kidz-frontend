import React, { useEffect, useState } from 'react'
import Loader from '../../loader/Loader';

const StudentHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='homeBackground'>
          <h3>Dashboard ~</h3>
          <p>
            This is the student's <b>Dashboard Page</b>
          </p>
        </div>
      )}
    </>
  )
}

export default StudentHome