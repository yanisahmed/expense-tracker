import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearFilter, fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useDispatch();
    let location = useLocation();
    let pathname = location.pathname;
    // console.log(location)

    const { transactions, isLoading, isError, filters, pagination, message } = useSelector(
        (state) => state.transaction
    );
    let {currentPage, limit} = pagination;
    const {type, serachKey} = filters;

    
   
    useEffect(() => {
        dispatch(fetchTransactions({ currentPage, limit, type, serachKey}));
    }, [dispatch, currentPage, limit, type, serachKey, message]);

    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && transactions?.length > 0 && location.pathname === '/') {
        content = transactions.map((transaction, index) => (index < 5 &&
            <Transaction key={transaction.id} transaction={transaction} />
        ));
        dispatch(clearFilter());
    }
    if (!isLoading && !isError && transactions?.length > 0 && location.pathname !== '/') {
        content = transactions.map((transaction, index) => (index < 10 &&
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }

    if (!isLoading && !isError && transactions?.length === 0) {
        content = <p>No transactions found!</p>;
    }

    return (
        <>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>
        </>
    );
}
