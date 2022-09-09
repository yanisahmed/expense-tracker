
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination/Pagination";
import Transactions from "../components/Transactions/Transactions";

export default function AllTransactions() {
    const { editing } = useSelector((state) => state.transaction) || {};
    return (
        <Layout>
            <Filter />
            {editing?.id && <Form />}
            <Transactions limit={10} />
            <Pagination />
        </Layout>
    )
}