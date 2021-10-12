import mongoose from 'mongoose'

 const reviewSchema = mongoose.Schema(
   {
     name: { type: String, required: true },
     rating: { type: Number, required: true },
     comment: { type: String, required: true },
     user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
            },
    },
   {
     timestamps: true,
   }
 )

  const animeSchema = mongoose.Schema(
      {
          reviews: [reviewSchema],
          rating: {
              type: Number,
              required: true,
              default: 0,
          },
          numReviews: {
              type: Number,
              required: true,
              default: 0,
          },
      },
     {
     timestamps: true,
   }
  )
 
 const Anime = mongoose.model('Anime', animeSchema)

 export default Anime

