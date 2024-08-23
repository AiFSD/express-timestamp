const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Directory path
const dirPath = path.join(__dirname, 'files');

// Ensure the directory exists
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

// POST endpoint to create a file
app.post('/create', (req, res) => {
    const now = new Date();
    const dateTimeString = now.toISOString().replace(/[:.]/g, '-'); 
    const fileName = `${dateTimeString}.txt`;
    const filePath = path.join(dirPath, fileName);
    const content = now.toString();

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create file' });
        }
        res.status(201).json({ message: 'File created successfully', fileName });
    });
});

// GET endpoint to list all text files
app.get('/list', (req, res) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read directory' });
        }

        const textFiles = files.filter(file => file.endsWith('.txt'));
        res.status(200).json({ files: textFiles });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
