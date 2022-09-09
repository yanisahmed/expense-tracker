import axios from "../../utils/axios";

export const getTransactions = async (currentPage, limit, type, serachKey) => {
    // https://priyoserver.herokuapp.com/transactions?_page=1&_limit=5&type_like=income
    
    // const response = await axios.get(`/transactions?_page=${currentPage}&_limit=${limit}&type_like=${type}`);
    let queryString = "";
    if (currentPage !== "") {
        queryString += `&_page=${currentPage}`;
    }
    if (limit !== "") {
        queryString += `&_limit=${limit}`;
    }
    if (type !== "" && type !== undefined) {
        queryString += `&type=${type}`;
    }
    if (serachKey !== "" && serachKey !== undefined) {
        queryString += `&q=${serachKey}`;
    }

    const response = await axios.get(`/transactions?${queryString}&_sort=id&_order=desc`);
   
    return {
        responseData: response.data,
        total_count: response.headers['x-total-count']
    }
};

export const addTransaction = async (data) => {
    const response = await axios.post("/transactions", data);

    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transactions/${id}`);

    return response.data;
};
