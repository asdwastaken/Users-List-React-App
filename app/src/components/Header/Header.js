import './header.css';
import searchIcon from '../../content/images/search-icon.svg';
import { useLocation, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { context } from '../../context/context';
import { getAll } from '../../services/userService';


export default function Header() {

    const userId = useParams('userId').userId;
    const location = useLocation();
    const isDeletePath = location.pathname.includes('delete');

    const { setUsers } = useContext(context);
    const [searchValue, setSearchValue] = useState('');

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value)
    }

    const searchUsers = (e) => {
        e.preventDefault();

        const foundUsers = [];

        getAll()
            .then((users) => {
                users.map(user => {
                    if (user.first_name.includes(searchValue) || user.last_name.includes(searchValue) || user.email.includes(searchValue)) {
                        foundUsers.push(user);
                    }
                })
                setUsers(foundUsers);
            })

    }

    return (
        <div className="header">
            <div className="header-container">
                {userId && !isDeletePath
                    ?
                    <h1>User Setup</h1>

                    :
                    <>
                        <h1>Project Access</h1>
                        <div className="search-input-container">
                            <form onSubmit={searchUsers}>
                                <input className="search-input" placeholder="Type to filter the table" value={searchValue} onChange={onChangeHandler} />
                                <img src={searchIcon} className="search-icon" onClick={searchUsers}/>
                            </form>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}