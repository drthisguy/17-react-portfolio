import axios from 'axios';
import path from 'path';


export default {

    postMail: (email) => axios.post("/send", email)

  }
