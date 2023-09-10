const router = require('express').Router()

const { getAllUsers,getSingleUser,addNewUser,updateUser,deleteUser, login} = require('../controllers/userController')


router.get('/', getAllUsers)
router.get('/:id',getSingleUser)
router.post('/',addNewUser)
router.post('/login',login)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)


module.exports = router