var api_key = process.env.api_key;
var domain = process.env.domain;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })

module.exports = function (app, config) {

    app.post('/contact', function (req, res) {
        console.log(req.body);
        var email = {
            from: 'contact@matthewstegall.com',
            to: 'mstegall928@gmail.com',
            subject: req.body.name,
            text: 'Email: ' + req.body.email + '              Message: ' + req.body.message
        }

        mailgun.messages().send(email, function (error, body) {
            if (error) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);    
            }            
        })

    })
};