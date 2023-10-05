import './home.css';
import { Link } from 'react-router-dom';
import { getAll } from '../../services/userService';
import { useEffect, useState } from 'react';
import dropdownIcon from '../../content/images/dropdown-icon.svg';
import userIconActive from '../../content/images/table-user-icon-active.svg';
import statusToggleActive from '../../content/images/status-toggle-active.svg';
import statusToggleDisabled from '../../content/images/status-toggle-disabled.svg';
import keyIconActive from '../../content/images/key-icon-active.svg';
import binIcon from '../../content/images/bin-icon.svg';
import settingsIcon from '../../content/images/settings-icon.svg';




export default function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => setUsers(result))
    }, [])

    return (
        <div className="home">
            <Link to="/invite-new-user" className="add-user-btn">+</Link>
            <div className="home-table-container">
                <table className="home-table">
                    <thead>
                        <tr className="row" id="table-headings">
                            <th id="user-heading">
                                <div >
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
                        <tr className="row">
                            <td className="table-user-icon">
                                <img src={userIconActive}  />
                            </td>
                            <td id="user-info">
                                <div className="table-name">
                                    Danniel Blichman
                                </div>
                                <div className="table-email">
                                    danniel.blichman@testtask.com
                                </div>
                            </td>
                            <td id="user-role">
                                <img src={keyIconActive} className="key-icon-active" />
                                <div className="table-role">
                                    Admin
                                </div>
                            </td>
                            <td id="user-status">
                                <img src={statusToggleActive} className="status-toggle-icon-active" />

                            </td>
                            <td id="user-actions">
                                <img src={settingsIcon} className="settings-icon" />
                                <img src={binIcon} className="bin-icon" />

                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}