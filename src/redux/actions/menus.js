import { createActions } from 'redux-actions'
import menuQuery from './menuQuery'

export const QUERY_MENU_LIST = 'QUERY_MENU_LIST'

const menuSetting = menuQuery
const { queryMenuList } = createActions({
	[QUERY_MENU_LIST]: () => Promise.resolve(menuSetting)
})

export default {queryMenuList}