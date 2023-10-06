import './home.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../context/context';
import Header from '../Header/Header';
import Table from '../Table/Table';
import RecordsPagination from '../RecordsPagination/RecordsPagination';
import UserSetup from '../UserSetup/UserSetup';
import settingsIcon from '../../content/images/settings-icon.svg';



export default function Home() {

    const userId = useParams('userId').userId;


    const {
        users,
        setUsers,
        records,
        toggleStatus,
        newUserModal,
        toggleModal,
    } = useContext(context)




    return (
        <>
            {newUserModal && < Outlet />}
            <Header />

            {userId
                ?
                <div className="home">
                    <Link className="settings-page-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#FFFFFF" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </Link>
                    <UserSetup />
                </div>
                :
                <div className="home">
                    <Link to="/invite-new-user" className="add-user-btn" onClick={toggleModal}>+</Link>
                    <Table users={users} toggleStatus={toggleStatus} setUsers={setUsers} records={records} />
                    <RecordsPagination />
                </div>
            }
        </>
    )
}