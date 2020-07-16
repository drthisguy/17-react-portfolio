import axios from 'axios';

export default {

    postMail: email => axios.post("/send", email)

  }
