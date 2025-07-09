const db = require('../db');
const uuid = require('uuid');




exports.getAllClients = async (req,res) => {
    await db.query(`select * from clients;`)
    .then(result => {
        res.json(result[0][0]);
    }).catch(err => {
        res.status(500).json({error : err.message});
    });
}

exports.getClientById = async (req,res) => {
    var client_id = req.params.client_id;
    await db.query(`select * from clients where client_id = ?`,[client_id])
    .then(result => {
        res.json(result[0][0]);
    }).catch(err => {
        res.status(500).json(err.message);
    })
}

exports.addClient = async (req,res) => {
    var client = req.body
    client.client_id = uuid.v4();
    await db.query(`insert into clients set ?`,[client])
    .then(result => {
        res.json(client);
    }).catch(err => {
        res.status(500).json(err.message);
    })
}


exports.editClient = async (req,res) => {
    var client = req.body;
    await db.query(`update clients set ? where client_id = ?`,[client,client.client_id])
    .then(result => {
        res.json(client);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}

exports.deleteClient = async (req,res) => {
    var client_id = req.params.client_id;
    await db.query(``)
    .then(result => {
        res.json(client_id);
    }).catch(err => {
        res.status(500).json(err.message);
    });
}