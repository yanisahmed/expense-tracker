import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AllTransactions from "./pages/AllTransactions";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transactions" element={<AllTransactions />} />
            </Routes>
        </Router>
    );
}

export default App;
