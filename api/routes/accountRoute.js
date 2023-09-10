const router = require('express').Router()
const {getAllAccounts,getSingleAccount,addNewAccount,updateAccount,deleteAccount,getByUserId} = require('../controllers/accountController')


router.get('/', getAllAccounts)
router.post('/getById', getByUserId)
router.get('/:id', getSingleAccount)


router.post('/', addNewAccount)
router.put('/:id', updateAccount)
router.delete('/:id',deleteAccount)



module.exports = router