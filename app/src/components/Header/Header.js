import './header.css';
import searchIcon from '../../content/images/searchIcon.svg';


export default function Header() {


    return (
        <div className="header">
            <div className="header-container">
                <h1>Project Access</h1>
                <div className="search-input-container">
                    <input className="search-input" placeholder="Type to filter the table" />
                    <img src={searchIcon} className="search-icon" />
                </div>
            </div>
        </div>
    )
}