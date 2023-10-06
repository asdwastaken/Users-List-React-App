import './userSetup.css';

import userIcon from '../../content/images/user-icon.svg';
import userIconBG from '../../content/images/user-icon-bg-2x.svg';

import keyIcon from '../../content/images/key-icon-active.svg';


export default function UserSetup() {


    return (
        <div className="user-setup">
            <div className="user-setup-container">
                <div className="photo-section">
                    <div className="photo-icon-container">
                        <img src={userIcon} className="photo-icon" />
                        <img src={userIconBG} className="photo-icon-bg" />
                        <img src={keyIcon} className="photo-key-icon" />
                    </div>
                </div>

                <div className="details-section">

                </div>

                <div className="permissions-section">

                </div>

            </div>

        </div>
    )
}