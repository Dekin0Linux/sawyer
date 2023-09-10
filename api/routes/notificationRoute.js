const router = require('express').Router()

const {getAllNotification,getSingleNotification,addNewNotification,updateNotification,deleteNotification,getUserNotification} = require('../controllers/notificationController')


router.get('/', getAllNotification)
router.get('/:id', getSingleNotification)
router.post('/userNotifications',getUserNotification)
router.post('/', addNewNotification)
router.put('/:id', updateNotification)
router.delete('/:id',deleteNotification)



module.exports = router

