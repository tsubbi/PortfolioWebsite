import React from 'react';
// UI-framework
import { Typography } from '@material-ui/core';
// image
import IMAGES from '../../images/img_index.js';
// component
import ResumeTimeline from '../Timeline/ResumeTimeline';
import '../../css/profile.css';

const Profile = () => {
    return (
        // use className rather than "class" in react
        <div className="profile container_shadow">
            <div className="name_container">
                <Typography className="name">君の名は</Typography>
                <Typography className="title">Your Title</Typography>
            </div>

            <div className="profile_image">
                {/* 
                    How to make the image appear:
                    1.  require('file_source') will not work due to the react version.
                        need to add ".default" at the end
                    2. import images at top
                    3. in image folder add an object so other file can import the object to call for it
                */}
                <img src={IMAGES.profile}></img>
                
            </div>

            <div className="profile_info">
                <ResumeTimeline />
                <br />
                <button>mButton</button>
            </div>
        </div>
    )
}

export default Profile;