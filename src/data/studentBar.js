import { FaTh } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';

const studentMenu = [
  {
    title: 'Dashboard',
    icon: <FaTh />,
    path: '/student/home',
  },
  {
    title: 'Account',
    icon: <BiUserCircle />,
    children: [
      {
        title: 'Profile',
        icon: <BiUserCircle />,
        path: '/student/profile',
      },
      {
        title: 'My Subscription',
        path: '/student/account',
      },
      {
        title: 'Change Password',
        path: '/student/change-password',
      },
    ],
  },
];

export default studentMenu;
