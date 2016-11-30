import { createActions } from 'redux-actions'
import { SEARCH_KW, SEARCH_RESULT } from './action_types'
import player from './player'
import fetchApi from '../../utils/fetch'

const {
	searchKw,
	searchResult
} = createActions(
	SEARCH_KW,
	SEARCH_RESULT
)

const {
	setlist,
	setindex,
	setmodel,
	getlyric,
	songinfo,
	comments,
	getPlayerlist,
	getSongLyric,
	getSonginfo,
	getComments,
} = player

export default {
	searchKw,
	searchResult,
	setlist,
	setindex,
	setmodel,
	getlyric,
	songinfo,
	comments,
	getPlayerlist,
	getSongLyric,
	getSonginfo,
	getComments,
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
