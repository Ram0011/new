const express = require('express');
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionCTRL');

//router
const router = express.Router();

//routes
//add Transaction POST method
router.post('/add-transaction', addTransaction);

//edit Transaction POST method
router.post('/edit-transaction', editTransaction);

//delete Transaction POST method
router.post('/delete-transaction', deleteTransaction);

//post Transactions
router.post('/get-transaction', getAllTransaction);


module.exports = router;