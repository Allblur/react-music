import React, { Component, PropTypes } from 'react'
import Pagination from './Pagination'
import SearchResultItems from './SearchResultItems'

class SearchResultSong extends Component {
	constructor(props) {
		super(props),
		this.actionPageClick = this.actionPageClick.bind(this)
		this.changePlaylist = this.changePlaylist.bind(this)
		this.state = {
			pageCount: 0,
			offset: 15,
			data: []
		}
	}

	componentWillMount() {
		this.actionPageClick(0)
	}

	changePlaylist(pId) {
		/*this.props.getPlayerlist(`/musiclist/${pId}/`)
		this.props.setindex(0)*/
	}

	actionPageClick(n) {
		this.setState({
			pageCount: Math.ceil(this.props.paginationData.length / this.state.offset),
			data: this.props.paginationData.slice(n * this.state.offset, (n + 1) * this.state.offset)
		})
	}

	render() {
		return (
			<div className="result-item">
				<SearchResultItems
					{...this.props}
					changePlaylist={this.changePlaylist}
					paginationData={this.state.data}
					t={this.props.t}
				/>
				<Pagination
					pageCount={this.state.pageCount}
					offset={this.state.offset}
					clickCallback={this.actionPageClick}
				/>
			</div>
		)
	}
}

export default SearchResultSong