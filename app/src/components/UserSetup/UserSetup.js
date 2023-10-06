import './userSetup.css';

import userIcon from '../../content/images/user-icon.svg';
import userIconBG from '../../content/images/user-icon-bg-2x.svg';
import keyIcon from '../../content/images/key-icon-active.svg';
import statusActive from '../../content/images/status-toggle-active.svg';
import statusDisabled from '../../content/images/status-toggle-disabled.svg';
import arrowDown from '../../content/images/arrow-down-icon.svg';
import { getAll } from '../../services/userService';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from '../Header/Header';
import { validateFields } from '../../functions/validations';


export default function UserSetup() {


    const userId = useParams('userId').userId;
    const [user, setUser] = useState({});
    const [userPermissions, setUserPermissions] = useState([]);
    const [requiredFields, setRequiredFields] = useState(false);
    const [openPermissionGroups, setOpenPermissionGroups] = useState({
        group1: false,
        group2: false,
        group3: false,
    });



    const togglePermission = (permission) => {
        const updatedUserPermissions = userPermissions.map(([name, status]) => {
            if (name === permission[0]) {
                return [name, !status];
            }
            return [name, status];
        });

        setUserPermissions(updatedUserPermissions);
    };



    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        role: '',
    });

    useEffect(() => {
        getAll()
            .then(users => {
                const foundUser = users.find(x => x.id == userId);

                setUser(foundUser);
                setUserPermissions(Object.entries(foundUser.permissions))

                setInputValues({
                    firstName: foundUser?.first_name || '',
                    lastName: foundUser?.last_name || '',
                    role: foundUser?.role || '',
                });
            })
    }, [userId])



    useEffect(() => {
        setRequiredFields(validateFields(inputValues));
    }, [inputValues])




    const onChangeHandler = (e) => {
        setInputValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const toggleList = (group) => {
        setOpenPermissionGroups(state => {
            return ({ ...state, [group]: !state[group] })
        }
        )
    };

    const toggleStatus = (currentStatus) => {
        setUser(state => {
            return { ...state, status: !currentStatus }

        })
    }


    return (
        <>
            <Header />
            <div className="home edit">
                <Link className="settings-page-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#FFFFFF" viewBox="0 0 16 16">
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                </Link>

                <div className="user-setup">
                    <div className="user-setup-container">
                        <div className="photo-section">
                            <div className="photo-icon-container">
                                <img src={userIcon} className="photo-icon" />
                                <img src={userIconBG} className="photo-icon-bg" />
                                <img src={keyIcon} className="photo-key-icon" />
                            </div>

                            {user.status && < input name="photoInput" type='file' className="photo-input" />}

                            <h1 style={!user.status ? { color: "#C6C6C6", marginTop: "64px" } : {}}>{`${user.first_name} ${user.last_name}`}</h1>
                            <span style={!user.status ? { color: "#C6C6C6" } : {}}>{user.email}</span>


                            {user.status && < Link className="resend-invite-btn">Resend the invite</Link>}
                        </div>

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

                            <form className={user.status ? "edit-user-form" : "edit-user-form inactive"}>

                                <div className="edit-form-container">

                                    <div >
                                        <input placeholder='' id='first-name-input' type='text' name='firstName' value={inputValues.firstName} onChange={onChangeHandler} disabled={!user.status && 'disabled'} />
                                        <label htmlFor='firstName'>* First Name</label>
                                    </div>

                                </div>

                                <div className="edit-form-container">
                                    <div >
                                        <input placeholder='' type='text' name='lastName' value={inputValues.lastName} onChange={onChangeHandler} disabled={!user.status && 'disabled'} />
                                        <label htmlFor='lastName'>* Last Name</label>
                                    </div>
                                </div>

                                <div className="edit-form-container">
                                    <div  >
                                        <input placeholder='' name='role' value={inputValues.role} onChange={onChangeHandler} disabled={!user.status && 'disabled'} />
                                        <label htmlFor='role'>* Role</label>
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

                        <div className="permissions-section">
                            <div className="permissions-heading-container">
                                <h1>Permissions</h1>
                                <span>{user.role}</span>
                            </div>

                            <div className={user.status ? "permissions-container" : "permissions-container inactive"}>
                                <div className="permission-group" id="super-admin">
                                    <b><span>Super Admin</span></b>
                                    {userPermissions.every(x => x[1] == true)
                                        ?
                                        <img src={statusActive} />
                                        :
                                        <img src={statusDisabled} />
                                    }
                                </div>
                                <div className="permission-group-container">
                                    < ul className="permission-group-list" >
                                        <div onClick={user.status ? () => toggleList('group1') : null}>
                                            <img src={arrowDown} />
                                            <span>Permission group 1</span>
                                        </div>

                                        {userPermissions.slice(0, 5).map((x, i) => {
                                            return (
                                                <li key={i} className={(openPermissionGroups['group1'] ? "hidden" : (x[1] ? "allowed" : "forbidden"))}>

                                                    Permission {x[0].split('_')[1]}
                                                    {
                                                        x[1]
                                                            ?
                                                            <img src={statusActive} onClick={user.status ? () => togglePermission(x) : null} />
                                                            :
                                                            <img src={statusDisabled} onClick={user.status ? () => togglePermission(x) : null} />
                                                    }
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    < ul className="permission-group-list" >
                                        <div onClick={user.status ? () => toggleList('group2') : null}>
                                            <img src={arrowDown} />
                                            <span>Permission group 2</span>
                                        </div>

                                        {userPermissions.slice(5, 10).map((x, i) => {
                                            return (
                                                <li key={i} className={(openPermissionGroups['group2'] ? "hidden" : (x[1] ? "allowed" : "forbidden"))}>

                                                    Permission {x[0].split('_')[1]}
                                                    {
                                                        x[1]
                                                            ?
                                                            <img src={statusActive} onClick={user.status ? () => togglePermission(x) : null} />
                                                            :
                                                            <img src={statusDisabled} onClick={user.status ? () => togglePermission(x) : null} />
                                                    }
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    < ul className="permission-group-list" >
                                        <div onClick={user.status ? () => toggleList('group3') : null}>
                                            <img src={arrowDown} />
                                            <span>Permission group 3</span>
                                        </div>

                                        {userPermissions.slice(10, 15).map((x, i) => {
                                            return (
                                                <li key={i} className={(openPermissionGroups['group3'] ? "hidden" : (x[1] ? "allowed" : "forbidden"))}>

                                                    Permission {x[0].split('_')[1]}
                                                    {
                                                        x[1]
                                                            ?
                                                            <img src={statusActive} onClick={user.status ? () => togglePermission(x) : null} />
                                                            :
                                                            <img src={statusDisabled} onClick={user.status ? () => togglePermission(x) : null} />
                                                    }
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>
                </div >
            </div >
        </>
    )
}