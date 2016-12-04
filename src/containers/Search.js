import React, { Component } from 'react'
import { connect } from 'react-redux'
import searchActions from 'actions/search'
import SearchForm from 'components/SearchForm'
import SearchResult from 'components/SearchResult'
import '../assets/style/search.styl'

@connect(
	state => state.search,
	searchActions
)
class Search extends Component {
	constructor(props) {
		super(props)
	}

	actionSearch(t) {
		const {kw} = this.props.location.query
		const res = {list: []}
		localStorage.setItem("searchType", t)
		this.props.searchResult(res)
		this.props.history.push(`/search?kw=${kw}&t=${t}`)
	}
	renderStype() {
		const type = [
			{t: '2', val: '歌单'},
			{t: '1', val: '单曲'},
			{t: '4', val: '专辑'},
			{t: '3', val: '歌手'}
		]
		return type.map((elem, key) => {
			if (this.props.location.query.t === elem.t) {
				return (
					<li key={elem.t} className='active'>
						<span onClick={this.actionSearch.bind(this,elem.t)}>{elem.val}</span>
					</li>
				)
			}
			return (
				<li key={elem.t}>
					<span onClick={this.actionSearch.bind(this,elem.t)}>{elem.val}</span>
				</li>
			)
		})
	}

	render() {
		const {kw, t} = this.props.location.query
		return (
			<div className="wrapper search-wrap">
				<div className="result-wrap">
					<ul className="result-hd">
						{this.renderStype()}
					</ul>
					<div className="result-bd">
						<SearchResult {...this.props} />
					</div>
				</div>
			</div>
		)
	}
}

export default Search