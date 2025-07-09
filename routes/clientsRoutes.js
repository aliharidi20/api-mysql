const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/cleints');



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID
 *         name:
 *           type: string
 *         email:
 *           type: string
 *       example:
 *         id: 1
 *         name: Ali
 *         email: ali@example.com
 */
/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Get all clients
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: List of all clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/',clientsController.getAllClients);
/**
    * @swagger
    * /api/clients/{client_id}:
    *   get:
    *     summary: Get client
    *     tags: [Clients]
    *     parameters:
    *       - in: path
    *         name: client_id
    *         required: true
    *         schema:
    *           type: string
    *         description: The ID of the client to fetch
    *     responses:
    *       200:
    *         description: Successfully fetched all data
    *       404:
    *         description: Not found
    *       500:
    *         description: server error
*/
router.get('/:client_id',clientsController.getClientById);
/**
    * @swagger
    * /api/clients:
    *   post:
    *     summary: add client
    *     tags: [Clients]
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               product_name:
    *                 type: string
    *               sub_product:
    *                 type: string
    *               issue:
    *                 type: string
    *               sub_issue:
    *                 type: string
    *               consumer_complaint_narrative:
    *                 type: string
    *               company_public_response:
    *                 type: string
    *               company:
    *                 type: string
    *               state_name:
    *                 type: string
    *               zip_code:
    *                 type: string
    *               tags:
    *                 type: string
    *               consumer_consent_provided:
    *                 type: string
    *               submitted_via:
    *                 type: string
    *               date_sent:
    *                 type: string
    *               company_response_to_consumer:
    *                 type: string
    *               timely_response:
    *                 type: string
    *               consumer_disputed:
    *                 type: string
    *               complaint_id:
    *                 type: string
    *               
    *     responses:
    *       200:
    *         description: Successfully fetched all data
    *       404:
    *         description: Not found
    *       500:
    *         description: server error
*/
router.post('/',clientsController.addClient);
/**
    * @swagger
    * /api/clients:
    *   put:
    *     summary: edit client
    *     tags: [Clients]
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               product_name:
    *                 type: string
    *               sub_product:
    *                 type: string
    *               issue:
    *                 type: string
    *               sub_issue:
    *                 type: string
    *               consumer_complaint_narrative:
    *                 type: string
    *               company_public_response:
    *                 type: string
    *               company:
    *                 type: string
    *               state_name:
    *                 type: string
    *               zip_code:
    *                 type: string
    *               tags:
    *                 type: string
    *               consumer_consent_provided:
    *                 type: string
    *               submitted_via:
    *                 type: string
    *               date_sent:
    *                 type: string
    *               company_response_to_consumer:
    *                 type: string
    *               timely_response:
    *                 type: string
    *               consumer_disputed:
    *                 type: string
    *               complaint_id:
    *                 type: string
    *               
    *     responses:
    *       200:
    *         description: Successfully fetched all data
    *       404:
    *         description: Not found
    *       500:
    *         description: server error
*/
router.put('/',clientsController.editClient);
/**
    * @swagger
    * /api/clients/{client_id}:
    *   delete:
    *     summary: delete client
    *     tags: [Clients]
    *     parameters:
    *       - in: path
    *         name: client_id
    *         required: true
    *         schema:
    *           type: string
    *         description: The ID of the client to delete
    *     responses:
    *       200:
    *         description: Successfully fetched all data
    *       404:
    *         description: Not found
    *       500:
    *         description: server error
*/
router.delete('/:client_id',clientsController.deleteClient);

module.exports = router;