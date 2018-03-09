import { FETCHING, FETCH_SUCCESS, FETCH_FAILED, RESET_DATA } from '../../actions/ActionType';

const initialState = {
  searchList:[],
  fetching: false,
  error: null
}

export default function reducer(
  state={}, action) {
    switch (action.type) {
      case FETCHING: {
        return {
          ...state,
            fetching: true
          }
          break;
      }
      case FETCH_SUCCESS: {
        return {
            ...state,
            fetching: false,
            searchList: action.data
        }
        break;
      }
       case FETCH_FAILED: {
         return {
            ...state,
            fetching: false,
            error: action.payload
         }
         break;
       }
       case RESET_DATA : {
          return {
            ...initialState
          }
          break;
       }
       default:
          return state
    }
}