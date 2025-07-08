const db = require("../db");
const uuid = require("uuid");
 


exports.getAllConsumers = async (req,res) => {
    const consumers = await db.query(`select * from consumer_complaints where complaint_id = 468889`);
    res.json(consumers[0]); 
}

exports.getConsumerById = async (req,res) => {
    var complaint_id = req.params.complaint_id;
    const consumer = await db.query(`select * from consumer_complaints where complaint_id = ?`,[complaint_id]);
    console.log(consumer)
    res.json(consumer[0]);
}

exports.addConsumer = async (req,res) => {
    var consumer = req.body;
    //consumer.complaint_id = uuid.v4();
    await db.query(`insert into consumer_complaints set ?`,consumer)
    .then( (result) => {
        console.log(result);
        res.json({data: consumer})
    })
    .catch( err => {
        console.log(err);
        
        res.status(500).json(err);
    })
     
}

exports.editConsumer = async (req,res) => {
    var consumer = req.body;
    await db.query(`update consumer_complaints set ? where complaint_id = ?`,[consumer,consumer.complaint_id])
    .then(() => {
        res.json({data : consumer});
    }).catch(err => {
        res.status(500).json({error: err.message})
    })
}

exports.deleteConsumer = async (req,res) => {
    var complaint_id = req.params.complaint_id;
    await db.query(`delete from consumer_complaints where complaint_id = ?`,[complaint_id])
    .then(() => {
        res.json({complaint_id});
    }).catch(err => {
        res.status(500).json({error : err.message});
    });
}