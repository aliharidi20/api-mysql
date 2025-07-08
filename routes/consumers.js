const express = require("express");
const router = express.Router();
const consumersController = require("../controllers/consumers");
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
 * /api/consumers:
 *   get:
 *     summary: Get all consumers
 *     tags: [consumers]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get('/',consumersController.getAllConsumers);
/**
    * @swagger
    * /api/consumers/{complaint_id}:
    *   get:
    *     summary: Get consumer
    *     tags: [consumers]
    *     parameters:
    *       - in: path
    *         name: complaint_id
    *         required: true
    *         schema:
    *           type: string
    *         description: The ID of the complaint to fetch
    *     responses:
    *       200:
    *         description: Successfully fetched all data
    *       404:
    *         description: Not found
    *       500:
    *         description: server error
*/

router.get('/:complaint_id',consumersController.getConsumerById);
/**
    * @swagger
    * /api/consumers:
    *   post:
    *     summary: add consumer
    *     tags: [consumers]
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
router.post('/',consumersController.addConsumer);

/**
    * @swagger
    * /api/consumers:
    *   put:
    *     summary: edit consumer
    *     tags: [consumers]
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

router.put('/',consumersController.editConsumer);

/**
    * @swagger
    * /api/consumers/{complaint_id}:
    *   delete:
    *     summary: delete consumer
    *     tags: [consumers]
    *     parameters:
    *       - in: path
    *         name: complaint_id
    *         required: true
    *         schema:
    *           type: string
    *         description: The ID of the complaint to delete
    *     responses:
    *       200:
    *         description: Successfully fetched all data
    *       404:
    *         description: Not found
    *       500:
    *         description: server error
*/

router.delete('/:complaint_id',consumersController.deleteConsumer)

module.exports = router;
