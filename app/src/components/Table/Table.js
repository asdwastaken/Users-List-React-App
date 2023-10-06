import dropdownIcon from '../../content/images/dropdown-icon.svg';
import userIconActive from '../../content/images/table-user-icon-active.svg';
import userIconBG from '../../content/images/table-user-icon-bg.svg';
import statusToggleActive from '../../content/images/status-toggle-active.svg';
import statusToggleDisabled from '../../content/images/status-toggle-disabled.svg';
import keyIconActive from '../../content/images/key-icon-active.svg';
import keyIconDisabled from '../../content/images/key-icon-disabled.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAll } from '../../services/userService';



export default function Table({
    users,
    toggleStatus,
    records,
    setUsers,

}) {

    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        getAll()
            .then(result => {
                setUsers(result.slice(0, records));
            })
    }, [records])

    const sortUsers = () => {
        getAll()
            .then((result) => {
                const sortedUsers = result.slice(0, records);
                if (sortOrder === 'asc') {
                    sortedUsers.sort((a, b) => a.first_name.localeCompare(b.first_name));
                    setSortOrder('desc');
                } else {
                    sortedUsers.sort((a, b) => b.first_name.localeCompare(a.first_name));
                    setSortOrder('asc');
                }
                setUsers(sortedUsers);
            })
    }

    return (
        <div className="home-table-container">
            <table className="home-table">
                <thead>
                    <tr className="row" id="table-headings">
                        <th id="user-heading">
                            <div onClick={sortUsers}>
                                User <img src={dropdownIcon} className="dropdown-icon" id="user-dropdown-icon" />
                            </div>
                        </th>
                        <th id="role-heading">
                            <div >
                                Role <img src={dropdownIcon} className="dropdown-icon" />
                            </div>
                        </th>
                        <th id="status-heading" >
                            <div >
                                Status <img src={dropdownIcon} className="dropdown-icon" />
                            </div>
                        </th>
                        <th id="actions-heading">
                            <div >
                                Actions
                            </div>
                        </th>
                    </tr>
                </thead>


                <tbody>
                    {users.map(user => {
                        return (
                            <tr className={user.status ? "row" : "row disabled"} key={user.id}>
                                <td className="table-user-icon-container">
                                    <div>
                                        <img src={userIconActive} className="table-user-icon" />
                                        <img src={userIconBG} />
                                    </div>
                                </td>
                                <td id="user-info">
                                    <div className="table-name">
                                        {`${user.first_name} ${user.last_name}`}
                                    </div>
                                    <div className="table-email">
                                        {user.email}
                                    </div>
                                </td>
                                <td id="user-role">
                                    {user.role == 'Admin' && user.status
                                        ?
                                        <img src={keyIconActive} className="key-icon-active" />
                                        :
                                        null
                                    }

                                    {user.role == 'Admin' && user.status === false
                                        ?
                                        <img src={keyIconDisabled} className="key-icon-disabled" />
                                        :
                                        null
                                    }

                                    <div className="table-role">
                                        {user.role}
                                    </div>
                                </td>
                                <td id="user-status">
                                    {user.status
                                        ?
                                        <img src={statusToggleActive} className="status-toggle-icon" onClick={() => toggleStatus(user.id)} />
                                        :
                                        <img src={statusToggleDisabled} className="status-toggle-icon" onClick={() => toggleStatus(user.id)} />
                                    }
                                </td>
                                <td id="user-actions">
                                    {user.status
                                        ?
                                        <>
                                            <Link className="settings-icon-link" to={`/user/edit/${user.id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#C6C6C6" className="settings-icon" viewBox="0 0 16 16">
                                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                </svg>
                                            </Link>
                                            <Link className="bin-icon-link" to={`/user/delete/${user.id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.934" height="17.15" viewBox="0 0 12.934 17.15" fill="#c6c6c6"><path className="bin-icon" d="M1.539,16.156a1.883,1.883,0,0,0,1.848,1.905h7.391a1.883,1.883,0,0,0,1.848-1.905V4.723H1.539ZM13.549,1.864H10.316L9.392.912H4.772l-.924.953H.615V3.77H13.549Z" transform="translate(-0.615 -0.912)" /></svg>
                                            </Link>

                                        </>
                                        :
                                        <Link className="bin-icon-link" to={`/user/delete/${user.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12.934" height="17.15" viewBox="0 0 12.934 17.15" fill="#c6c6c6"><path className="bin-icon" d="M1.539,16.156a1.883,1.883,0,0,0,1.848,1.905h7.391a1.883,1.883,0,0,0,1.848-1.905V4.723H1.539ZM13.549,1.864H10.316L9.392.912H4.772l-.924.953H.615V3.77H13.549Z" transform="translate(-0.615 -0.912)" /></svg>
                                        </Link>

                                    }

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}