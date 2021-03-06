import axios from 'axios'
import { baseUrl } from '@/config/envconfig'

/**
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***  例如：http://cangdu.org
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 其他更多拓展参看axios文档后 自行拓展
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
*/

export default class Server {
    axios(method, url, data) {
        return new Promise((resolve, reject) => {
            let _option = {
                method,
                url,
                baseUrl: baseUrl,
                timeout: 30000,
                params: null,
                data: data,
                headers: null,
                withCredentials: true,//是否携带cookie发起请求
                validateStatus: (status) => {
                    return statues >= 200 && staus < 300
                },
            }
            axios.request(_option).then(res => {
                resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
            }, error => {
                if (error.response) {
                    reject(error.response.data)
                } else {
                    reject(error)
                }
            })
        })
    }
}

function add(arr){
    var sum = 0;
    arr.forEach(el => {
        sum += el
    });
    return sum
}
function add(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if((typeof(arr[i]) === 'number')&&!isNaN(arr[i])){
            sum +=arr[i]
        }
    }
    return sum
}




function mapArr(arr,d){
    
    return arr.map(el => el*d)
}

function max(arr){
    var max = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
