import './newUserModal.css';


export default function NewUserModal() {

    return (

        <div className="new-user-modal">
            <div className="new-user-modal-container">
                <h1>Invite New User</h1>
                <form className="new-user-form">
                    <input placeholder='* First Name' />

                    <input placeholder='* Last Name' />
                    <input placeholder='* Email' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12,2a10,10,0,0,0,0,20h5V20H12a8.1,8.1,0,0,1-8-8,8.1,8.1,0,0,1,8-8,8.1,8.1,0,0,1,8,8v1.43A1.616,1.616,0,0,1,18.5,15,1.616,1.616,0,0,1,17,13.43V12a5,5,0,1,0-1.46,3.53A3.7,3.7,0,0,0,18.5,17,3.513,3.513,0,0,0,22,13.43V12A10,10,0,0,0,12,2Zm0,13a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" /><path class="a" d="M0,0H24V24H0Z" /></svg>
                    <input placeholder='* Role' />


                </form>

            </div>
        </div>
    )
}