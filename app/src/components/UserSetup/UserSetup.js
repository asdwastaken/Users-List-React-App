import './userSetup.css';

import userIcon from '../../content/images/user-icon.svg';
import userIconBG from '../../content/images/user-icon-bg-2x.svg';
import keyIcon from '../../content/images/key-icon-active.svg';

import { getAll } from '../../services/userService';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { validateFields } from '../../functions/validations';

import Header from '../Header/Header';
import DetailsSection from './DetailsSection/DetailsSection';
import PermissionsSection from './PermissionsSection/PermissionsSection';


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
        first_name: '',
        last_name: '',
        role: '',
    });

    useEffect(() => {
        getAll()
            .then(users => {
                const foundUser = users.find(x => x.id == userId);

                setUser(foundUser);
                setUserPermissions(Object.entries(foundUser.permissions))

                setInputValues({
                    first_name: foundUser?.first_name || '',
                    last_name: foundUser?.last_name || '',
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
                <Link className="settings-page-icon" to='/'>
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

                        <DetailsSection
                            user={user}
                            toggleStatus={toggleStatus}
                            inputValues={inputValues}
                            onChangeHandler={onChangeHandler}
                            requiredFields={requiredFields} />


                        <PermissionsSection 
                            user={user}
                            userPermissions={userPermissions}
                            toggleList={toggleList}
                            openPermissionGroups={openPermissionGroups}
                            togglePermission={togglePermission}
                            />
                    </div>
                </div >
            </div >
        </>
    )
}