const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
const port = 3000;

app.use(express.ur3.lencoded({ extended: true }));
app.use(express.json());

// Endpoint to handle form submission
app.post('/submit', upload.single('fileUpload'), (req, res) => {
    // Retrieve form data
    const formData = {
        name: req.body.name,
        contactNumber: req.body.contactNumber,
        subject: req.body.subject,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        dob: req.body.dob,
        assignmentDescription: req.body.assignmentDescription,
        fileUpload: req.file ? req.file.path : null // Save file path if uploaded
    };

    // Store or process the form data here (e.g., save to a database)

    // Respond with a success message
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
