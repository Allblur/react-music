import { createActions } from 'redux-actions'
import * as ACTION_TYPES from './action_types'
import fetchApi from '../../utils/fetch'

const {
	fetchMusicAction,
	playlistdetail,
	topplaylist
} = createActions(
	ACTION_TYPES.FETCH_MUSIC_ACTION,
	ACTION_TYPES.PLAYLISTDETAIL,
	ACTION_TYPES.TOPPLAYLIST
)

export default {
	fetchMusicAction,
	playlistdetail,
	topplaylist,
	getTopPlaylist(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(topplaylist(json)))
		}
	},

	getPlaylistInfo(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(playlistdetail(json)))
		}
	},

	fetchMusic(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => dispatch(fetchMusicAction(json)))
		}
	}
}
