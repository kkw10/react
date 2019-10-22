const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = (requsetType) => (
  {
    type: START_LOADING,
    payload: requsetType
  }
)

export const finishLoading = (requsetType) => (
  {
    type: FINISH_LOADING,
    payload: requsetType
  }
)

const loading = (state = {}, action ) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true
      }
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false
      }
    default:
      return state
  }
}

export default loading;