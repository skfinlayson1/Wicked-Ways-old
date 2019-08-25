const path = require("path");
const fs = require("fs");

module.exports = {

    index(req, res, next) {

    },

    uploadImage(req, res, next) {

        const fileName = req.files.image.originalFilename;
        const ext = path.extname(req.files.image.originalFilename).toLowerCase();
        const tempPath = req.files.image.path;
        const targetPath = path.join(__dirname, "../images/artwork/" + fileName);
        
        if (ext === ".jpg" || ext === ".png" || ext === ".svg") {
    
            fs.readFile(targetPath, (err, data) => {
                if (err) {
                    
                    fs.rename(tempPath, targetPath, err => {
                        if (err) {
                            res.json(err);
                        };
                    });
    
                    res.json("file was uploaded to the server.")
    
                } else {
    
                    res.json("File already exists");
    
                }
            })
    
        } else {
            res.json("Wrong file type");
        };

    }

}