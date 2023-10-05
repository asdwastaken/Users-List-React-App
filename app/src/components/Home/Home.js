import './home.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { getAll } from '../../services/userService';
import dropdownIcon from '../../content/images/dropdown-icon.svg';
import userIconActive from '../../content/images/table-user-icon-active.svg';
import statusToggleActive from '../../content/images/status-toggle-active.svg';
import statusToggleDisabled from '../../content/images/status-toggle-disabled.svg';
import keyIconActive from '../../content/images/key-icon-active.svg';
import keyIconDisabled from '../../content/images/key-icon-disabled.svg';
import binIcon from '../../content/images/bin-icon.svg';
import settingsIcon from '../../content/images/settings-icon.svg';
import { context } from '../../context/context';




export default function Home() {

    const {
        users,
        setUsers,
        records,
        setRecords,
        toggleStatus,
        toggleRecordsDropdown,
        recordsDropdown,
        recordsCount,
        setPageRecords
    } = useContext(context)


    useEffect(() => {
        getAll()
            .then(result => {
                setUsers(result.slice(0, records))
            })
    }, [records])

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
                        {users.sort((a, b) => a.id - b.id).map(user => {
                            return (
                                <tr className={user.status ? "row" : "row disabled"} key={user.id}>
                                    <td className="table-user-icon">
                                        <img src={userIconActive} />
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
                                        <img src={settingsIcon} className="settings-icon" />
                                        <img src={binIcon} className="bin-icon" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="records">
                <span className="records-container">Records on page <b>{users.length}</b> <img src={dropdownIcon} onMouseEnter={toggleRecordsDropdown} className="records-dropdown-icon" /></span>
                {recordsDropdown &&
                    <div className="records-dropdown" onMouseLeave={toggleRecordsDropdown}>
                        <input value={recordsCount.firstPage} name='firstPage' type='button' className="records-input" onClick={(e) => setPageRecords(e)} />
                        <input value={recordsCount.secondPage} name='secondPage' type='button' className="records-input" onClick={(e) => setPageRecords(e)} />
                        <input value={recordsCount.thirdPage} name='thirdPage' type='button' className="records-input" onClick={(e) => setPageRecords(e)} />
                    </div>
                }
            </div>
        </div>
    )
}