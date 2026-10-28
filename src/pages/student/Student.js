import React from 'react';
import styles from './Student.module.scss';
import { Route, Routes } from 'react-router-dom'
import StudentHome from '../../components/student/home/StudentHome';
import StudentSidebar from '../../components/student/sidebar/StudentSidebar';
import StudentProfile from '../../components/student/profile/StudentProfile';
import StudentSub from '../../components/student/subscription/StudentSub';
import ChangePassword from '../../components/student/changePassword/ChangePassword';

const Student = () => {
  return (
    <div className='--pad' style={{ minHeight: '80vh' }}>
        <div className={styles.student}>
        <div className={styles.navbar}>
            <StudentSidebar />
        </div>
        <div className={styles.content}>
            <Routes>
            <Route path='home' element={<StudentHome />} />
            <Route path='profile' element={<StudentProfile />} />
            <Route path='account' element={<StudentSub />} />
            <Route path='change-password' element={<ChangePassword />} />
            </Routes>
        </div>
        </div>
    </div>
  )
}

export default Student