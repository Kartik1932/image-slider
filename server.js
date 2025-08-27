const express = require('express');
const multer = require('multer')
const path = require('path');
const fs = require('fs');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"))

let imageStore = [];

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(numm, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

app.post("/upload", upload.array("images", 10), (req, res) => {
    const urls = req.body.urls ? req.body.ruls.split(",").map(u => u.trim()) : [];
    const uploadedFiles = req.files ? req.files.map(f => `http://localhost:3000/uploads/${f.filename}`) : [];
    imageStore.push(...uploadedFiles, ...urls);
    res.json({ message: "Images added", images: [...uploadedFiles, ...urls] })
})

app.get("/images", (req, res)=>{
    res.json({ images: imageStore });
})

app.get("/carousel", (req, res)=>{
    res.sendFile(path.join(__dirname, "carousel.html"));
})

app.get("/upload-form", (req, res) => {
    res.sendFile(path.join(__dirname, "upload_form.html"))
})

app.listen(3000, () => console.log("Server running"))