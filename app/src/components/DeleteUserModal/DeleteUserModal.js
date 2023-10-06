import { useContext, useEffect, useState } from 'react';
import './deleteUserModal.css';
import { context } from '../../context/context';
import faceIcon from '../../content/images/form-face.svg'
import closeX from '../../content/images/closeX.svg'
import { useParams } from 'react-router-dom';
import { getAll } from '../../services/userService';

export default function DeleteUserModal() {

    const { toggleDeleteModal, setUsers, users } = useContext(context);

    const userId = useParams('userId').userId;
    const [user, setUser] = useState({});

    useEffect(() => {
        getAll()
            .then(users => {
                const foundUser = users.find(x => x.id == userId);
                setUser(foundUser);
            })
    }, [userId])

    const deleteUser = () => {
        const updatedUsers = users.filter(x => x.id !== user.id)
        setUsers(updatedUsers);
        toggleDeleteModal();
    }

    return (
        <>
            <div className="delete-user-modal" onClick={toggleDeleteModal}>
            </div>

            <div className="delete-user-modal-container">
                <img src={closeX} className="modal-close-btn" onClick={toggleDeleteModal} />
                <h1>Delete User</h1>
                <div className="delete-user-container">
                    <img src={faceIcon} />
                    <div className="user-name">
                        {`${user.first_name} ${user.last_name}`}
                    </div>
                    <div className="user-status-role">
                        {user.status
                            ? <b><span>Active {user.role}</span></b>
                            : <b><span>Inactive {user.role}</span></b>
                        }
                    </div>
                </div>

                <input type="button" value="Delete User" className="delete-user-input" onClick={() => deleteUser()} />
            </div >
        </>
    )
}