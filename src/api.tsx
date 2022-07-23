import axios from "axios";

export const getSum: any = async (data: object) => {
    let result = await axios.post("http://localhost:8080/api/add-numbers", data);
    return result.data.result;
}