const express = require('express');

const bodyParser = require('body-parser');

const mysql = require('mysql2');

const cors = require('cors');

const multer = require('multer');

const pool = require('./db');


const app = express();

app.use(cors());


const upload = multer({

    dest: 'uploads/',

    limits: { fileSize: 25 * 1024 * 1024 }

});


app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit-form', upload.single('uploadedFile'), (req, res) => {

    if (!req.body.personalInfo) {
        res.status(400).send('Personal information is missing');
        return;
    }

    const personalInfo = {
        lastName: req.body.personalInfo.lastName,
        firstName: req.body.personalInfo.firstName,
        middleName: req.body.personalInfo.middleName,
        extension: req.body.personalInfo.extension,
        completeAddress: req.body.personalInfo.completeAddress,
        zipCode: req.body.personalInfo.zipCode,
        civilStatus: req.body.personalInfo.civilStatus,
        age: req.body.personalInfo.age,
        sex: req.body.personalInfo.sex,
        dateOfBirth: req.body.personalInfo.dateOfBirth,
        citizenship: req.body.personalInfo.citizenship,
        placeOfBirth: req.body.personalInfo.placeOfBirth,
        religion: req.body.personalInfo.religion,
        contactNumber: req.body.personalInfo.contactNumber,
        emailAddress: req.body.personalInfo.emailAddress,
        emergencyContactPerson: req.body.personalInfo.emergencyContactPerson,
        emergencyContactNumber: req.body.personalInfo.emergencyContactNumber,
        schoolAttended: req.body.personalInfo.schoolAttended,
        schoolAddress: req.body.personalInfo.schoolAddress,
        yearCompleted: req.body.personalInfo.yearCompleted,
        track: req.body.personalInfo.track,
        strand: req.body.personalInfo.strand,
        major: req.body.personalInfo.major
    };

    const educationalBackground = {

        field: req.body.educationalBackground.field

    };

    const otherInformation = {

        details: req.body.otherInformation.details

    };

    const desiredCourse = {

        course: req.body.desiredCourse.course

    };

    const uploadedFile = req.file;


    const sql = `

      INSERT INTO application_forms (personal_info, educational_background, other_information, desired_course, uploaded_file)

      VALUES (?, ?, ?, ?, ?)

    `;

    const values = [personalInfo.name, personalInfo.email, personalInfo.phone, educationalBackground.field, otherInformation.details, desiredCourse.course, uploadedFile ? uploadedFile.filename : null];

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

            connection.release();

        });

    });

});


const port = process.env.PORT || 5000;

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);

});