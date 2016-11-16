import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from 'actions/search'
import Pagination from 'components/Pagination'

@connect(
	state => state.search,
	actions
)
class SearchResult extends Component {
	constructor(props) {
		super(props)
	}

	getSearchResults() {
		const { kw, t} = this.props.location.query
		this.props.getSearchResult('/sreach/', {params: {w: kw, t: t}})
	}

	render() {
		//<Pagination type={this.state.type} result={result} offset={n} />
		const { kw, t} = this.props.location.query
		const result = this.props.searchData.searchResult.list || []
		const n = 15
		return (
			<div>
				Pagination
				{kw}\\\\\\
				{t}
			</div>
		)
	}
}

export default SearchResult