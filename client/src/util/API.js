import axios from 'axios';


export default {
    postMail: (email) => {
      return axios({
            method: "POST", 
            url:"http://localhost:3001/send", 
            data:  email
          })
    }}
