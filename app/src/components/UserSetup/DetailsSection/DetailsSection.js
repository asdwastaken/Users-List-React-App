import arrowFormIcon from '../../../content/images/arrow-form-icon.svg';
import statusActive from '../../../content/images/status-toggle-active.svg';
import statusDisabled from '../../../content/images/status-toggle-disabled.svg';

export default function DetailsSection({
    user,
    toggleStatus,
    inputValues,
    onChangeHandler,
    requiredFields
}) {
    return (
        <div className="details-section">
            <h1>Details</h1>
            {user.status
                ?
                <div className="details-status">
                    <img src={statusActive} onClick={() => toggleStatus(user.status)} />
                    <span>The user is <b>Active</b></span>
                </div>
                :
                <div className="details-status">
                    <img src={statusDisabled} onClick={() => toggleStatus(user.status)} />
                    <span>The user is <b>Inactive</b></span>
                </div>
            }

            <form className={user.status ? "edit-user-form" : "edit-user-form inactive"} >

                <div className="edit-form-container">

                    <div >
                        <input placeholder='' id='first-name-input' type='text' name='first_name' value={inputValues.first_name} onChange={onChangeHandler} disabled={!user.status && 'disabled'} />
                        <label htmlFor='first_name'>* First Name</label>
                    </div>

                </div>

                <div className="edit-form-container">
                    <div >
                        <input placeholder='' type='text' name='last_name' value={inputValues.last_name} onChange={onChangeHandler} disabled={!user.status && 'disabled'} />
                        <label htmlFor='last_name'>* Last Name</label>
                    </div>
                </div>

                <div className="edit-form-container">
                    <div >
                        <label htmlFor='role' id='form-role-label'>* Role</label>

                        <select placeholder='' name='role' onChange={onChangeHandler} className="role-select" value={inputValues.role} disabled={!user.status && 'disabled'}>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <img src={arrowFormIcon} className="arrow-form-icon" />
                    </div>

                </div>
                {user.status &&
                    <div className="submit-edit-form-container">
                        <input type='submit' value="Save Changes" className={requiredFields ? "send-edit-input validated-btn" : "send-edit-input"} disabled={!requiredFields && true} />

                        {!requiredFields
                            ?
                            <span className="edit-form-validation">Fill in all the fields</span>
                            :
                            <span className="edit-form-validation validated">Good to go</span>
                        }

                    </div>}

            </form>

        </div>
    )
}