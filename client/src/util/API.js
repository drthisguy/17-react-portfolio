import axios from 'axios';


export default {
    postMail: (email) => {
        axios({
            method: "POST", 
            url:"/send", 
            data:  email
          }).then( res =>{
            if (res.data.status === 'success'){
              console.log("Message Sent."); 
            }else if(res.data.status === 'fail'){
              console.log("Message failed to send.")
            }
          })
    }
}