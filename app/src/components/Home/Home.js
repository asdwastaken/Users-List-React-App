import './home.css';
import { Link, Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { getAll } from '../../services/userService';
import { context } from '../../context/context';
import Header from '../Header/Header';
import Table from '../Table/Table';
import RecordsPagination from '../RecordsPagination/RecordsPagination';




export default function Home() {

    const {
        users,
        setUsers,
        records,
        toggleStatus,
        newUserModal,
        toggleModal,
    } = useContext(context)


    useEffect(() => {
        getAll()
            .then(result => {
                setUsers(result.slice(0, records))
            })
    }, [records])

    return (
        <>
            {newUserModal && < Outlet />}
            <Header />

            <div className="home">
                <Link to="/invite-new-user" className="add-user-btn" onClick={toggleModal}>+</Link>

                <Table users={users} toggleStatus={toggleStatus} />

                <RecordsPagination />

            </div>
        </>
    )
}