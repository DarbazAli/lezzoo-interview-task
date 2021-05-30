import express from 'express'
import itemCtrl from '../controllers/itemControllers.js'

const router = express.Router()

router.route('/:categoryID').post(itemCtrl.createItem).get(itemCtrl.list)

export default router
