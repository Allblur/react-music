import { createActions } from 'redux-actions'

export const QUERY_MENU_LIST = 'QUERY_MENU_LIST'

const menuSetting = [{
	path: '/playlist',
	name: 'playlist',
	label: '歌单'
}, {
	path: '/fm',
	name: 'FM',
	label: 'FM'
}]
const { queryMenuList } = createActions({
	[QUERY_MENU_LIST]: () => Promise.resolve(menuSetting)
})

export default {queryMenuList}