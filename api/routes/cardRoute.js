const router = require('express').Router()
const {getAllCards,getSingleCard,getUserCards,addNewCard,updateCard,deleteCard} = require('../controllers/cardController')


router.get('/', getAllCards)
router.get('/:id', getSingleCard)
router.post('/usercards',getUserCards)
router.post('/', addNewCard)
router.put('/:id', updateCard)
router.delete('/:id',deleteCard)



module.exports = router