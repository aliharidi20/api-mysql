const db = require("../db");
 


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