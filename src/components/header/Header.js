import { useState } from 'react';
import styles from './Header.module.scss';
import logoWhite from '../../assets/logoWhite.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { logout, RESET, selectUser } from '../../redux/features/auth/authSlice';
import { ShowOnLogin, ShowOnLogout } from '../../components/protect/hiddenLink';
import { useDispatch, useSelector } from 'react-redux';
import { UserName } from '../student/profile/StudentProfile';

const logo = (
    <div className={styles.logo}>
      <Link to='/'>  
          <h2>Music4<span>Kidz</span></h2>
      </Link>
    </div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '');

const Header = () => {
  const user = useSelector(selectUser);
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fixNavbar = () => {
    if (window.scrollY > 125) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixNavbar);  

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = async () => {
    dispatch(RESET());
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
      <div className={styles.header}>
        <Link to='/'>
        <img src={logoWhite} alt='LogoImg' width='40' />
        </Link>
        {logo}

        <nav
          className={
            showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                : `${styles['nav-wrapper']}`
            }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles['logo-mobile']}>
              {logo}
              <FaTimes size={22} color='#fff' onClick={hideMenu} />
            </li>
            {/* <li>
              <NavLink to='/' className={activeLink}>
                Home
              </NavLink>
            </li> */}
            {/* <li>
              <AdminLink>
                <NavLink to='/admin/home' className={activeLink}>
                  Admin
                </NavLink>
              </AdminLink>
            </li> */}
          </ul>

          <div className={styles['header-right']} onClick={hideMenu}>

                <ul>
                  <li>
                    <ShowOnLogout>
                        <NavLink to={"login"} className={activeLink}>
                          Login
                        </NavLink>
                    </ShowOnLogout>
                  </li>
                  <li>
                    <ShowOnLogout>
                        <NavLink to={"register"} className={activeLink}>
                          Register
                        </NavLink>
                    </ShowOnLogout>
                  </li>
                </ul>

                <ul>
                  <li>
                    <ShowOnLogin>
                        <Link to={"/"} onClick={logoutUser}>
                          Logout &nbsp;
                        </Link>
                    </ShowOnLogin>
                  </li>
                </ul>

                <ul>
                  <li>
                    <ShowOnLogin>
                        <Link to={`/${user?.role}/profile`} style={{ textDecorationLine: "none" }}>
                          <UserName />
                        </Link>
                    </ShowOnLogin>
                  </li>
                </ul>

            <button className='--btn --btn-primary'>Get Started</button>
          </div>
        </nav>

        <div className={styles['menu-icon']}>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
