import { createActions } from 'redux-actions'
import { SEARCH_KW, SEARCH_RESULT } from './action_types'
import fetchApi from '../../utils/fetch'

const {
	searchKw,
	searchResult
} = createActions(
	SEARCH_KW,
	SEARCH_RESULT
)

export default {
	searchKw,
	searchResult,
	getSearchResult(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(searchResult(json)))
		}
	},
	getJsondata(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => Promise.resolve(json))
		}
	},
}
