import axios from "axios";


const getComments = () => {
    const apiUrl = 'http://localhost:8000/api/comments';
    return axios.get(apiUrl).then((resp) => {
        return resp.data;
    });
};


export {getComments}