import express from 'express'
import itemCtrl from '../controllers/itemControllers.js'

const router = express.Router()

router.route('/:categoryID').post(itemCtrl.createItem)

// router.route('/:id').get(categoryCtrl.getCategoryById)

export default router
