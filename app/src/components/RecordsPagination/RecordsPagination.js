import { useContext } from 'react';
import dropdownIcon from '../../content/images/dropdown-icon.svg';
import { Link } from 'react-router-dom';
import { context } from '../../context/context';


export default function RecordsPagination() {


    const {
        users,
        toggleRecordsDropdown,
        recordsDropdown,
        recordsCount,
        setPageRecords,
    } = useContext(context)

    return (
        <div className="records-pagination">
            <div className="records">
                <span className="records-container">Records on page <b>{users.length}</b> <img src={dropdownIcon} onMouseEnter={toggleRecordsDropdown} className="records-dropdown-icon" /></span>
                {recordsDropdown &&
                    <div className="records-dropdown" onMouseLeave={toggleRecordsDropdown}>
                        <input value={recordsCount.firstPage} name='firstPage' type='button' className="records-input" onClick={(e) => setPageRecords(e)} />
                        <input value={recordsCount.secondPage} name='secondPage' type='button' className="records-input" onClick={(e) => setPageRecords(e)} />
                        <input value={recordsCount.thirdPage} name='thirdPage' type='button' className="records-input" onClick={(e) => setPageRecords(e)} />
                    </div>
                }
            </div>

            <div className="pagination">
                <div className="pagination-container">
                    <Link className="page page-direction" >Previous</Link>
                    <Link className="page active" to={'/'} >1</Link>
                    <Link className="page" to={'/2'}>2</Link>
                    <Link className="page page-direction" >Next</Link>
                </div>
            </div>
        </div>
    )
}