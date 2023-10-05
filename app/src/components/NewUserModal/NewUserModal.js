import './newUserModal.css';
import closeX from '../../content/images/closeX.svg';
import emailIcon from '../../content/images/form-@.svg';
import faceIcon from '../../content/images/form-face.svg';
import keyIcon from '../../content/images/form-key.svg';
import { useContext } from 'react';
import { context } from '../../context/context';



export default function NewUserModal() {

    const { toggleModal } = useContext(context);

    return (
        <>
            <div className="new-user-modal" onClick={toggleModal}>
            </div>

            <div className="new-user-modal-container">
                <img src={closeX} className="modal-close-btn" onClick={toggleModal} />
                <h1>Invite New User</h1>
                <form className="new-user-form">
                    <div className="form-names form-container">
                        <img src={faceIcon} className="form-icon" />
                        <input placeholder='* First Name' id='first-name-input' type='text' name='firstName' />
                        <input placeholder='* Last Name' type='text' name='lastName' />
                    </div>

                    <div className="form-email form-container">
                        <img src={emailIcon} className="form-icon" />
                        <input placeholder='* Email' type='email' name='email' />
                    </div>


                    <div className="form-role form-container">
                        <img src={keyIcon} className="form-icon" />
                        <input placeholder='* Role' name='role' />
                    </div>

                    <input type='submit' value="Send Invitation" id='send-input' />

                </form>
            </div >
        </>
    )
}