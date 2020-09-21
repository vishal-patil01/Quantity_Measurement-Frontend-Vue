import axios from "axios";

export default {
    post(url, postBody) {
        return axios({
            method: 'post',
            url: `${process.env.VUE_APP_URL}${url}`,
            data: postBody,
        })
    },
    get(url) {
        return axios({
            method: 'get',
            url: `${process.env.VUE_APP_URL}${url}`,
        })
    }
}
