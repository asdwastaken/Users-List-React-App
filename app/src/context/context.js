import { createContext } from "react";
import { getAll, getOne } from '../services/userService';
import { useState } from "react";

export const context = createContext();

export const ContextProvider = ({
    children
}) => {


    const [users, setUsers] = useState([]);
    const [records, setRecords] = useState(5);
    const [recordsDropdown, setRecordsDropdown] = useState(false);
    const [newUserModal, setNewUserModal] = useState(false);
    const [deleteUserModal, setDeleteUserModal] = useState(false);


    const toggleStatus = (userId) => {
        const user = getOne(userId, users)[0];

        const updatedUser = {
            ...user,
            status: !user.status,
        }

        setUsers(state => {
            const updatedState = state.filter(x => x.id !== userId);
            return [...updatedState, updatedUser]
        })

    }




    const toggleRecordsDropdown = () => {
        setRecordsDropdown(!recordsDropdown)
    }



    const recordsCount = {
        firstPage: 10,
        secondPage: 15,
        thirdPage: 20,
    }

    const setPageRecords = (e) => {
        setRecords(e.target.value);
    }

    const toggleModal = () => {
        setNewUserModal(!newUserModal);
    }

    const toggleDeleteModal = ()=>{
        setDeleteUserModal(!deleteUserModal);

    }

    const contextValues = {
        users,
        setUsers,
        records,
        setRecords,
        toggleStatus,
        toggleRecordsDropdown,
        recordsDropdown,
        recordsCount,
        setPageRecords,
        toggleModal,
        newUserModal,
        toggleDeleteModal,
        deleteUserModal
    }

    return (
        <context.Provider value={contextValues}>
            {children}
        </context.Provider>
    )

}