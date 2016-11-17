import React, { Component, PropTypes } from 'react'
import Pagination from './Pagination'

class SearchResult extends Component {
	static propTypes = {
		t: PropTypes.number.isRequired,
		kw: PropTypes.string.isRequired
	}

	constructor(props) {
		super(props),
		this.state = {
			t: 0,
			kw: ''
		}
	}

	componentWillMount() {
		this.getSearchResults()
	}

	componentDidUpdate() {
		if (this.state.t === this.props.t && this.state.kw === this.props.kw) return false
		this.getSearchResults()
	}

	getSearchResults() {
		const {kw, t} = this.props
		const {getSearchResult} = this.props
		getSearchResult('/sreach/', {params: {w: kw, t: t}})
		this.setState({
			t: t,
			kw: kw
		})
	}

	render() {
		const {t} = this.props
		const {searchData} = this.props
		const n = 15
		return (
			<div className="result-body">
				<Pagination
					result={searchData.searchResult.list ? searchData.searchResult.list : []}
					t={t}
					offset={n}
				/>
			</div>
		)
	}
}

export default SearchResult