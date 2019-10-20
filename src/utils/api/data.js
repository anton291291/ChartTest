import axios from 'axios'

const  Api =  {
  get: () =>  axios.get('https://vpanorame.ru/json_for_react.php')
,

}

export default Api
