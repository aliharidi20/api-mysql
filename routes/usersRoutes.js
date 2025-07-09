const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
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
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
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

router.get('/',usersController.getAllUsers);
/**
    * @swagger
    * /api/users/{complaint_id}:
    *   get:
    *     summary: Get user
    *     tags: [Users]
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

router.get('/:complaint_id',usersController.getUserById);
/**
    * @swagger
    * /api/users:
    *   post:
    *     summary: add user
    *     tags: [Users]
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
router.post('/',usersController.addUser);

/**
    * @swagger
    * /api/users:
    *   put:
    *     summary: edit user
    *     tags: [Users]
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

router.put('/',usersController.editUser);

/**
    * @swagger
    * /api/users/{complaint_id}:
    *   delete:
    *     summary: delete user
    *     tags: [Users]
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

router.delete('/:complaint_id',usersController.deleteUser)

module.exports = router;
