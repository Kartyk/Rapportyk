const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});
app.get('/home', function (req, res) {
    res.sendfile('./public/home.html');
});
app.get('/training', function (req, res) {
    res.sendfile('./public/interns.html');
});
app.get('/products', function (req, res) {
    res.sendfile('./public/products.html');
});
app.get('/contact', function (req, res) {
    res.sendfile('./public/contact.html');
});
app.get('/cloud-computing', function (req, res) {
    res.sendfile('./public/cloud-computing.html');
});
app.get('/web-development', function (req, res) {
    res.sendfile('./public/web-development.html');
});
app.get('/ecommerce', function (req, res) {
    res.sendfile('./public/ecommerce.html');
});
app.get('/services', function (req, res) {
    res.sendfile('./public/ui-ux.html');
});
app.get('/mobile-app', function (req, res) {
    res.sendfile('./public/mobile-app.html');
});
app.get('/interns', function (req, res) {
    res.sendfile('./public/interns.html');
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'rapportyk@gmail.com',
        pass: 'slingshot@123'
    }
});

app.post('/sendMail', (req, res) => {

    var mailOptions = {
        from: 'rapportyk@gmail.com',
        to: 'rapportyk@gmail.com',
        // subject: 'fname'+" "+req.body.fname+'Mobile No'+" "+req.body.mobile+'Email ID'+""+req.body.emailId+'message'+""+req.body.message,
        subject: 'Testing',
        html: 'fname' + " " + req.body.fname + 'Mobile No' + " " + req.body.mobile + 'Email ID' + "" + req.body.emailId + 'message' + "" + req.body.message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send('fail')
        } else {
            console.log(info)
            res.send('success')
        }
    });
});

let port = 9000;
app.listen(port, () => console.log('App listening on port ' + port));