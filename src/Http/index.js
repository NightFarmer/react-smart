import Axios from 'axios'

class Http extends Axios {

    static async form(url, data, files) {
        let formData = new FormData();
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key])
            }
        }
        // 需要上传的文件
        const file = { uri: '', type: 'multipart/form-data', name: 'fileName.xx' };   // 这里的key(uri和type和name)不能改变,
        formData.append('file', file);   // 这里的files就是后台需要的key

        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                // console.log("onUploadProgress", e)
                // Math.round( (progressEvent.loaded * 100) / progressEvent.total )
            },
        };

        return Axios.post(url, formData, config);
    }
}

export default Http