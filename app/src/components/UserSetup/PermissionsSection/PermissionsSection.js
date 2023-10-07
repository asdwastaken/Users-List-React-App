import statusActive from '../../../content/images/status-toggle-active.svg';
import statusDisabled from '../../../content/images/status-toggle-disabled.svg';
import arrowDown from '../../../content/images/arrow-down-icon.svg';

export default function PermissionsSection({
    user,
    userPermissions,
    toggleList,
    openPermissionGroups,
    togglePermission
}) {

    return (

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
                        <div onClick={user.status ? () => toggleList('group1') : null} style={openPermissionGroups['group1'] ? { marginBottom: "0" } : {}}>
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
                        <div onClick={user.status ? () => toggleList('group2') : null} style={openPermissionGroups['group2'] ? { marginBottom: "0" } : {}}>
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
                        <div onClick={user.status ? () => toggleList('group3') : null} style={openPermissionGroups['group3'] ? { marginBottom: "0" } : {}}>
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
    )
}