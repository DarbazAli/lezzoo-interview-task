import express from 'express'
import categoryCtrl from '../controllers/categoryControllers.js'

const router = express.Router()

router.route('/').post(categoryCtrl.createCategory).get(categoryCtrl.list)

router.route('/:id').get(categoryCtrl.getCategoryById)

export default router
