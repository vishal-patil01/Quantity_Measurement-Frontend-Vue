import axios from "axios";

export default {

    post(url, conversionDTO) {
        return axios({
            method: 'post',
            url: `http://localhost:8080/unit/converter`,
            data: conversionDTO,
        })
    },
    get(url) {
        return axios({
            method: 'get',
            url: `http://localhost:8080/unit/${url}`,
        })
    }
}
