import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class SearchForm extends Component {
	static propTypes = {
		searchKw: PropTypes.func,
		getSearchResult: PropTypes.func.isRequired,
		push: PropTypes.func.isRequired,
		val: PropTypes.string
	}

	constructor(props) {
		super(props),
		this.actionGoSearch = this.actionGoSearch.bind(this)
	}

	actionGoSearch() {
		const kw = ReactDOM.findDOMNode(this.refs.searchKeywords).value
		//this.props.searchKw(kw)
		this.props.getSearchResult('/sreach/', {params: {w: kw, t: 2}})
		this.props.push(`/search?kw=${kw}`)
	}

	render() {
		return (
			<div className="search-form">
				<div className="search-wrap">
					<input type="text" defaultValue={this.props.val ? this.props.val : ''} ref="searchKeywords" placeholder="单曲/歌手/专辑/歌单"/>
					<span className="search-btn" onClick={this.actionGoSearch}>搜索</span>
				</div>
			</div>
		)
	}
}

export default SearchForm