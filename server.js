const express = require('express'),
 router = express.Router(),
 path = require("path"),
 nodemailer = require('nodemailer'),
 cors = require('cors'),
 creds = require('./config'),

 PORT = process.env.PORT || 3001;

 transport = {
    host: 'smtp.gmail.com.',
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
},

 transporter = nodemailer.createTransport(transport);

 transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  router.post('/send', (req, res) => {
    const  name = req.body.name,
     email = req.body.email,
     message = req.body.message,
     content = `name: ${name} \n email: ${email} \n message: ${message} `,
  
     mail = {
      from: name,
      to: 'page.c.tyler@gmail.com', 
      subject: 'New Message from your Profile, Contact Form',
      text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
           status: 'success'
          })
        }
      })
    })

const app = express()

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors())
app.use(express.json())
app.use('/', router)

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
