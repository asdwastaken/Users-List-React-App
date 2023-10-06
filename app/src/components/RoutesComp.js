import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NewUserModal from './NewUserModal/NewUserModal';
import Header from "./Header/Header";
import UserSetup from "./UserSetup/UserSetup";



export default function RoutesComp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} >
                <Route path="/invite-new-user" element={<NewUserModal />} />
            </Route>
            <Route path="/:pageCount" element={<Home />} />
            <Route path="/user/edit/:userId" element={<Home />} />


        </Routes>
    )
}