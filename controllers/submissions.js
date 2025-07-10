const db = require("../db");
const uuid = require("uuid");




exports.getAllSubmissions = async (req,res) => {
    await db.query(``)
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}


exports.addSubmissions = async (req,res) => {
    var submission = req.body;
    submission.submission_id = uuid.v4();

    await db.query(``)
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}