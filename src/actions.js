import { CHANGE_SEARCH_FIELD} from './constants'

export const setSerachField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})