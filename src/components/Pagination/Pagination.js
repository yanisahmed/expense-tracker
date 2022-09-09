import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { decreaseLimit, fetchTransactions, increaseLimit, setCurrentPage } from '../../features/transaction/transactionSlice';
import './pagination.css';
export default function Pagination() {
    const [page, setPage] = useState(1);

    const { transactions, pagination, filters} = useSelector(state => state.transaction) || {};
    const { currentPage, limit, totalItems } = pagination;
    const {type, serachKey}= filters;
    const location = useLocation();
    const dispatch = useDispatch();
    console.log("pagination: ", totalItems);

    const totalPages = Math.ceil(totalItems / limit);

    const limitIncrementHandler = () => {
        dispatch(increaseLimit());
    }

    const limitDecrementHandler = () => {
        dispatch(decreaseLimit());
    }

    const updateCurrentPage = (index) => {
        dispatch(setCurrentPage(index))
    }
   

    const handlePrev = () => {
        let c_page = currentPage;
        if (c_page > 1) {
            c_page = c_page - 1;
            updateCurrentPage(c_page);
            setPage(c_page);
            console.log(c_page, totalPages)
        }
    }
    const handleNext = () => {
        let c_page = currentPage;
        c_page = c_page + 1;
        if (c_page < totalPages + 1 ) {

            updateCurrentPage(c_page);
            setPage(c_page);
            console.log(c_page, totalPages)
        }
    }

    const linkHandler = (index) => {
        updateCurrentPage(index);
        setPage(index);
    }

    useEffect(() => {

        dispatch(fetchTransactions({ currentPage, limit, type, serachKey }))

    }, [dispatch, page, currentPage, limit, totalItems])
    return (
        <>
            <div className="pagination">
                <a href="" onClick={handlePrev}>&laquo;</a>
                {
                    transactions.map((transaction, index) => (index < totalPages && <a  href="" className={currentPage === index + 1 ? 'active' : null} onClick={() =>linkHandler(index+1)}>{index + 1}</a>))
                }
                <a  href="" onClick={handleNext}>&raquo;</a>
            </div>
            {location.pathname === "/" ? (
                <div>
                    <Link to={`/transactions`}><button className='btn view-all' onClick={limitIncrementHandler}>View All</button></Link>

                </div>
            ) : (
                <div>
                    <Link to={`/`}><button className='btn view-all' onClick={limitDecrementHandler}>Back to Home</button></Link>

                </div>
            )}
        </>
    );
}