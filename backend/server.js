const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const cors = require('cors')
const multer = require('multer');
const pool = require('./db');

const app = express()
app.use(cors())

const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 25 * 1024 * 1024 }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', upload.single('uploadedFile'), (req, res) => {
    const personalInfo = req.body.personalInfo ? JSON.parse(req.body.personalInfo) : {};
    const educationalBackground = req.body.educationalBackground ? JSON.parse(req.body.educationalBackground) : {};
    const otherInformation = req.body.otherInformation ? JSON.parse(req.body.otherInformation) : {};
    const desiredCourse = req.body.desiredCourse ? JSON.parse(req.body.desiredCourse) : {};
    const uploadedFile = req.file;

    const sql = `
      INSERT INTO application_forms (personal_info, educational_background, other_information, desired_course, uploaded_file)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [JSON.stringify(personalInfo), JSON.stringify(educationalBackground), JSON.stringify(otherInformation), JSON.stringify(desiredCourse), uploadedFile ? uploadedFile.filename : null];

    pool.getConnection((err, connection) => { // Get a connection from the pool
        if (err) {
            console.error('Error getting connection from MySQL pool:', err);
            res.status(500).send('Error submitting form');
            return;
        }
        connection.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error inserting data into MySQL:', err);
                res.status(500).send('Error submitting form');
                return;
            }
            console.log('Form data inserted into MySQL');
            res.status(200).send('Form submitted successfully');
            connection.release(); // Release the connection back to the pool
        });
    });
});

const port = process.env.PORT || 3000; // Assuming you have PORT defined in your .env file or using default 3000
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
