import { createActions } from 'redux-actions'
import player from './player'
import fetchApi from '../../utils/fetch'

const {
	setlist,
	setindex,
	setmodel,
} = player

export default {
	setlist,
	setindex,
	setmodel,
	getJsondata(url, args) {
		return dispatch => {
			return fetchApi(url, args).then(json => Promise.resolve(json))
		}
	}
}
