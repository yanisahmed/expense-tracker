import Balance from "../components/Balance";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination/Pagination";
import Transactions from "../components/Transactions/Transactions";

export default function Home() {
    return (
        <Layout>
            <Balance />
            <Form />
            <Transactions />
            <Pagination />
        </Layout>
    )
}