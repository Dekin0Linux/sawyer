const router = require('express').Router()
const {getAllTransactions,getSingleTransaction,addNewTransaction,updateTransaction,deleteTransaction,getUserTransactions} = require('../controllers/transactionController')



router.get('/', getAllTransactions)
router.get('/:id', getSingleTransaction)
router.post('/usertransactions',getUserTransactions)
router.post('/', addNewTransaction)
router.put('/:id', updateTransaction)
router.delete('/:id',deleteTransaction)



module.exports = router