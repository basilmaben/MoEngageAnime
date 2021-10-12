import asyncHandler from 'express-async-handler'
// @desc    Create new review
// @route   POST /api/anime/:id/reviews
// @access  Private
const createAnimeReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const anime = await Anime.findById(req.params.id)

  if (anime) {
    const alreadyReviewed = anime.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Anime already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    anime.reviews.push(review)

    anime.numReviews = anime.reviews.length

    anime.rating =
      anime.reviews.reduce((acc, item) => item.rating + acc, 0) /
      anime.reviews.length

    await anime.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Anime not found')
  }
})

 export {createAnimeReview}