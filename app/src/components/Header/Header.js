import './header.css';
import searchIcon from '../../content/images/search-icon.svg';
import { useParams } from 'react-router-dom';


export default function Header() {

    const userId = useParams('userId').userId;

    return (
        <div className="header">
            <div className="header-container">
                {userId
                    ?
                    <h1>User Setup</h1>

                    :
                    <>
                        <h1>Project Access</h1>
                        <div className="search-input-container">
                            <input className="search-input" placeholder="Type to filter the table" />
                            <img src={searchIcon} className="search-icon" />
                        </div>
                    </>
                }

            </div>
        </div>
    )
}