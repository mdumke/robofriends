import { CHANGE_SEARCH_FIELD } from './constants'

export const changeSearchField = event => ({
  type: CHANGE_SEARCH_FIELD,
  payload: event.target.value
})
