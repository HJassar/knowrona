import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../logo_white.png";
import SideMenu from "../SideMenu/SideMenu";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

import { connect } from "react-redux";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";

const Header = ({
  hidden,
  toggleProfileHidden,
  // splashOver,
  // isAuthenticated
}) => {
  
  let location = useLocation().pathname;
  
  const displayHeaderLogo = ["/", "/home"].includes(location) ? false:true;
  const displayHeaderMenu = ["/"].includes(location) ? false : true;

  return (
    <header className="Header">
      {displayHeaderLogo ?
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <HeaderLogo />
        </Link>
        : null}
      {displayHeaderMenu ?
        <div className='Header__menu'>
          <Link to="/profile">
            <div className='Header__avatar'>
              <ProfilePicture />
            </div>
          </Link>
          <div className="Header__menu-button" onClick={toggleProfileHidden}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* <Link className='Header__menu-button' to='/home'>
            <FontAwesomeIcon icon={faBars} />
          </Link> */}
          {!hidden ? <SideMenu /> : null}
        </div>
        : null}
    </header>
  );
};

const HeaderLogo = () => {
  return (
    <>
      <div className="Header__logo">
        <h1>
          Kn
          <div className="Header__img">
            <img src={logo} alt="Logo" />
          </div>
          wRona
        </h1>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.profile.hidden,
  splashOver: state.utils.splashOver,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
