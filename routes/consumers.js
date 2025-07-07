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


module.exports = router;