const multer = require('multer');

const upload = multer({
    limits: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.includes('image')) {
            cb(null, true);
            return;
        }
        const err = new Error('format error');
        err.status = 400;
        cb(err);
    },
});

module.exports = upload;
