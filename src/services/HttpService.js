import axios from "axios";

const baseUrl = 'http://localhost:8080/unit/';

export default {

    post(url, conversionDTO) {
        return axios({
            method: 'post',
            url: `${baseUrl}${url}`,
            data: conversionDTO,
        })
    },
    get(url) {
        return axios({
            method: 'get',
            url: `${baseUrl}${url}`,
        })
    }
}
