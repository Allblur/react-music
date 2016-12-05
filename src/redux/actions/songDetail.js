import { createActions } from 'redux-actions'
import { SONG_INFOS, GET_LYRICS, GET_COMMENTS } from 'actions/action_types'
import player from './player'
import fetchApi from '../../utils/fetch'

const {
	songInfos,
	getLyrics,
	getComments
} = createActions(
	SONG_INFOS,
	GET_LYRICS,
	GET_COMMENTS
)
const {
	setlist,
	setindex,
	setmodel
} = player

export default {
	songInfos,
	setlist,
	setindex,
	setmodel,
	getLyrics,
	getComments,
	getJsondata(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => Promise.resolve(json))
		}
	},
	getSongInfo(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(songInfos(json)))
		}
	},
	getLyric(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(getLyrics(json)))
		}
	}
}
