import './newUserModal.css';
import closeX from '../../content/images/closeX.svg';
import emailIcon from '../../content/images/form-@.svg';
import faceIcon from '../../content/images/form-face.svg';
import keyIcon from '../../content/images/form-key.svg';
import { useContext, useEffect, useState } from 'react';
import { context } from '../../context/context';
import { validateField, validateFields } from '../../functions/validations';



export default function NewUserModal() {

    const { toggleModal } = useContext(context);
    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    })

    const [requiredFields, setRequiredFields] = useState(false);


    const onChangeHandler = (e) => {
        setInputValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        setRequiredFields(validateFields(inputValues));
    }, [inputValues])


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
                        <div id="first-name-container">
                            <input placeholder='' id='first-name-input' type='text' name='firstName' value={inputValues.firstName} onChange={onChangeHandler} />
                            <label htmlFor='firstName'>* First Name</label>
                        </div>
                        <div>
                            <input placeholder='' type='text' name='lastName' value={inputValues.lastName} onChange={onChangeHandler} />
                            <label htmlFor='lastName'>* Last Name</label>
                        </div>
                    </div>

                    <div className="form-email form-container">
                        <img src={emailIcon} className="form-icon" />
                        <input placeholder='' type='email' name='email' value={inputValues.email} onChange={onChangeHandler} />
                        <label htmlFor='email'>* Email</label>
                    </div>


                    <div className="form-role form-container">
                        <img src={keyIcon} className="form-icon" />
                        <input placeholder='' name='role' value={inputValues.role} onChange={onChangeHandler} />
                        <label htmlFor='role'>* Role</label>
                    </div>

                    <div className="submit-form-container">
                        <input type='submit' value="Send Invitation" className={requiredFields ? "send-input validated-btn" : "send-input"} disabled={!requiredFields && true} />

                        {!requiredFields
                            ?
                            <span className="form-validation">Fill in all the fields</span>
                            :
                            <span className="form-validation validated">Good to go</span>
                        }

                        {/* <span className="form-validation">Email is required</span>
                        <span className="form-validation">First name is required</span>
                        <span className="form-validation">Last name is required</span> */}

                    </div>

                </form>
            </div >
        </>
    )
}