import './home.css';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
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
        deleteUserModal,
        toggleDeleteModal
    } = useContext(context)




    return (
        <>
            {newUserModal && < Outlet />}
            {deleteUserModal && < Outlet />}

            <Header />
            <div className="home">
                <Link to="/invite-new-user" className="add-user-btn" onClick={toggleModal}>+</Link>
                <Table users={users} toggleStatus={toggleStatus} setUsers={setUsers} records={records} toggleDeleteModal={toggleDeleteModal} />
                <RecordsPagination />
            </div>

        </>
    )
}