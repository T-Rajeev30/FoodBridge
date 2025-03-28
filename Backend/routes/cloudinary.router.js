import express from 'express';
import cloudinary from '../config/cloudinary.js';
import upload from '../middleware/multer.js'

const uploadRouter = express.Router();

uploadRouter.post('/upload', upload.single('image'), function (req, res) {
    console.log("?Hi");
    cloudinary.uploader.upload(req.file.path, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                error: err.message
            });
        }
        res.status(200).json({
            success: true,
            message: 'Image uploaded successfully',
            data: result,
        }); 
    });
});

export default uploadRouter;