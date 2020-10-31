import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../logo_white.png";
import SideMenu from "../SideMenu/SideMenu";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

import { connect } from "react-redux";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";

const Header = ({ hidden, toggleProfileHidden, splashOver }) => {
  let location = useLocation().pathname;
  const displayHeaderLogo = () => {
    if (!["/", "/home"].includes(location)) {
      return (
        <Link to="/home">
          <HeaderLogo />
        </Link>
      );
    }
  };

  return (
    <header className="Header">
      {displayHeaderLogo()}
      {splashOver ? (
        <div className="Header__menu">
          <Link to="/profile">
            <ProfileIcon />
          </Link>
          <div className="Header__menu-button" onClick={toggleProfileHidden}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          {/* <Link className='Header__menu-button' to='/home'>
              <FontAwesomeIcon icon={faBars} />
            </Link> */}
          {!hidden ? <SideMenu /> : null}
        </div>
      ) : null}
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
});

const mapDispatchToProps = (dispatch) => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
