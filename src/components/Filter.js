import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import {filterType, setSearchKey} from "../features/transaction/transactionSlice";




export default function Filter() {
    const [input, setInput] = useState("");
    const [type, setType] = useState("");

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(filterType(type));
    }, [dispatch, type])

    useEffect( () => {
        dispatch(setSearchKey(input))
    }, [dispatch, input])

    return (
        <>
            <div className="form">
                <form>

                    <div className="form-group">

                        <input
                            type="text"
                            name="name"
                            placeholder="Search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="form-group radio">
                        <label>Type</label>
                        <div className="radio_group">
                            <input

                                type="radio"
                                value="income"
                                name="type"
                                checked={type === "income"}
                                onChange={(e) => setType("income")}
                            />
                            <label>Income</label>
                        </div>
                        <div className="radio_group">
                            <input
                                type="radio"
                                value="expense"
                                name="type"
                                checked={type === "expense"}
                                onChange={(e) => setType("expense")}
                            />
                            <label>Expense</label>
                        </div>
                    </div>



                </form>
            </div>


        </>
    )
}