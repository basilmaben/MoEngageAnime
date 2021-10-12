import axios from 'axios'
 import {
   ANIME_CREATE_REVIEW_REQUEST,
   ANIME_CREATE_REVIEW_SUCCESS,
   ANIME_CREATE_REVIEW_FAIL,
 } from '../constants/animeConstants'


export const createAnimeReview = (animeId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: ANIME_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userId },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userId.token}`,
      },
    }

    await axios.post(`/api/anime/${animeId}/reviews`, review, config)

    dispatch({
      type: ANIME_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: ANIME_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}