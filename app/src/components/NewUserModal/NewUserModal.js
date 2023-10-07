import './newUserModal.css';
import closeX from '../../content/images/closeX.svg';
import emailIcon from '../../content/images/form-@.svg';
import faceIcon from '../../content/images/form-face.svg';
import keyIcon from '../../content/images/form-key.svg';
import arrowDownIcon from '../../content/images/arrow-form-icon.svg';

import { useContext, useEffect, useState } from 'react';
import { context } from '../../context/context';
import { validateFields } from '../../functions/validations';



export default function NewUserModal() {

    const { toggleModal, setUsers, users } = useContext(context);

    const [inputValues, setInputValues] = useState({
        first_name: '',
        last_name: '',
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


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            ...inputValues,
            id: users.length + 1,
            status: true,
        };

        setUsers(state => [...state, newUser])
        toggleModal()

    }

    return (
        <>
            <div className="new-user-modal" onClick={toggleModal}>
            </div>

            <div className="new-user-modal-container">
                <img src={closeX} className="modal-close-btn" onClick={toggleModal} />
                <h1>Invite New User</h1>

                <form className="new-user-form" onSubmit={(e) => onSubmitHandler(e)}>
                    <div className="form-names form-container">
                        <img src={faceIcon} className="form-icon" />
                        <div id="first-name-container">
                            <input placeholder='' id='first-name-input' type='text' name='first_name' value={inputValues.first_name} onChange={onChangeHandler} />
                            <label htmlFor='first_name'>* First Name</label>
                        </div>
                        <div>
                            <input placeholder='' type='text' name='last_name' value={inputValues.last_name} onChange={onChangeHandler} />
                            <label htmlFor='last_name'>* Last Name</label>
                        </div>
                    </div>

                    <div className="form-email form-container">
                        <img src={emailIcon} className="form-icon" />
                        <input placeholder='' type='email' name='email' value={inputValues.email} onChange={onChangeHandler} />
                        <label htmlFor='email'>* Email</label>
                    </div>


                    <div className="form-role form-container">
                        <img src={keyIcon} className="form-icon" />
                        <div id="form-role-container">
                            <label htmlFor='role'>* Role</label>
                            <select placeholder='' name='role' onChange={onChangeHandler} className="role-select" value={inputValues.role}>

                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                            <img src={arrowDownIcon} className="arrow-form-icon" />
                        </div>
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