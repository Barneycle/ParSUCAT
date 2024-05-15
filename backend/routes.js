const express = require('express');
const router = express.Router();
const connection = require('./db');

router.post('/submit-form', (req, res) => {
    const formData = req.body;

    connection.query('INSERT INTO applicant_info SET ?', formData, (err, result) => {

        if (err) {

            console.error('Error inserting data into MySQL:', err);
            res.status(500).send('Internal Server Error');
            return;

        }

        console.log('Form data inserted into MySQL');

        res.status(200).send('Form data submitted successfully');

    });
    
});

module.exports = router;