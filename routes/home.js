const express = require('express');
const router = express.Router();


// Una you have linksforhome here but it is not been used anywhere

const linksForHome = [{ url: 'itsligo.ie', text: 'IT Sligo Home Page' },
    { url: 'irishtimes.ie', text: 'The Irish Times' }
];


router.get('/', (req, res) => {


    // you have cookies etc here but are not using them to show anything
    

    var message = "";

    if (req.signedCookies.tracking) {
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back :" + req.signedCookies.tracking;
    }

    var currentDate = new Date();

    res.cookie('tracking', currentDate.toUTCString(), { signed: true });
    res.render('home', { 'message': message, links: linksForHome });
});


router.get('/about', (req, res) => {

    res.render('about');
});

router.get('/contact', (req, res) => {

    res.render('contact');
});

module.exports = router;