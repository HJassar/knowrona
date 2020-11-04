import React from "react";

import "./ProfilePicture.css";
import image from "./profile-pic.png";

import { connect } from "react-redux";
import { toggleProfileHidden } from "../../redux/profile/profile.actions";

const ProfilePicture = ({ avatarSize }) => {
  // let styles = {
  //   width: avatarSize,
  // };
  return (
    //<div className="ProfilePicture">
      <img
      className='ProfilePicture__img'
        src={image}
        alt="Profile Picture"
      />
    //</div>
  );
};

export default ProfilePicture;

// const mapStateToProps = (state) => ({ avatarSize: state.profile.avatarSize });

// const mapDispatchToProps = (dispatch) => ({
//   toggleProfileHidden: () => dispatch(toggleProfileHidden()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
