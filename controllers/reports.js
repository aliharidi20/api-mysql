const db = require("../db");



exports.getAllReports = async (req,res) => {
    await db.query(``)
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}

exports.addReport = async (req,res) => {
    var report = req.body;
    report.report_id = req.params.report_id;
    await db.query(``,[report,report.report_id])
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}

exports.editReport = async (req,res) => {
    var report = req.body;
    await db.query(``,report)
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}


exports.deleteReport = async (req,res) => {
    var report_id = req.params.report_id;
    await db.query(``,[report_id])
    .then(result => {
        res.json(result);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}