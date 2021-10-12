import express from 'express'
import {
  createAnimeReview,
} from '../controllers/animeController'
import { auth } from '../middleware/auth'


 const router = express.Router()

 

 router.route('/:id/reviews').post(auth, createAnimeReview)

 

 

 export default router