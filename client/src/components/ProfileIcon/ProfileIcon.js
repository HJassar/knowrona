import React from "react";

import "./ProfileIcon.css";
import image from "./profile-pic.png";

import { connect } from "react-redux";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";

const ProfileIcon = ({ avatarSize }) => {
  let styles = {
    width: avatarSize,
  };
  return (
    <div className="ProfileIcon">
      <img
        className="ProfileIcon-img"
        // style={styles}
        src={image}
        alt="Profile Picture"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({ avatarSize: state.profile.avatarSize });

const mapDispatchToProps = (dispatch) => ({
  toggleProfileHidden: () => dispatch(toggleProfileHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIcon);
