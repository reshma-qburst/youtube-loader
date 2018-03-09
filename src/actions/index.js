import axios from 'axios'
import { FETCHING, FETCH_SUCCESS, FETCH_FAILED, RESET_DATA } from './ActionType';

const fetchAwait = () => ({
    type: FETCHING
})

const fetchSuccess = data => ({
    type: FETCH_SUCCESS,
    data
})

const fetchFailed = error => ({
    type: FETCH_FAILED,
    error
})

const API_URL = 'https://www.googleapis.com/youtube/v3/search?maxResults=15&part=snippet&type=video&key=AIzaSyCoDgHpIlFjeA60mOwu3w0V63JZeMY1H90&q=' 

export const fetchSearchList = params => (dispatch, getState) => {
    dispatch(fetchAwait())

    axios.get(API_URL+params, {
    }).then(response => {
        dispatch(fetchSuccess(response.data))
    })
    .catch(error => {
      if (error.response) {
            dispatch(fetchFailed(error.response.data.error[0], error.response.status))
        } else {
            dispatch(fetchFailed(`Error: ${error.message}`, -1))
        }
    });
}

export const resetData = () => ({
    type: RESET_DATA,
    payload: 1
  });