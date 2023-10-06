import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NewUserModal from './NewUserModal/NewUserModal';
import Header from "./Header/Header";
import UserSetup from "./UserSetup/UserSetup";
import DeleteUserModal from "./DeleteUserModal/DeleteUserModal";



export default function RoutesComp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} >
                <Route path="/invite-new-user" element={<NewUserModal />} />
                <Route path="/user/delete/:userId" element={<DeleteUserModal />} />
            </Route>
            <Route path="/user/edit/:userId" element={<UserSetup />} />
            <Route path="/:pageCount" element={<Home />} />


        </Routes>
    )
}