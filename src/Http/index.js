import Axios from 'axios'

class Http extends Axios {

    static async form(url, data) {
        let formData = new FormData();
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key])
            }
        }

        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        return Axios.post(url, formData, config);
    }
}

export default Http