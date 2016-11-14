import React, { Component, PropTypes } from 'react'

class SearchForm extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='search-form'>
				<div className="search-wrap">
					<input type="text" ref="searchKeywords" placeholder="搜索歌单、单曲、歌词"/>
					<span className="search-btn">搜索</span>
				</div>
			</div>
		)
	}
}

export default SearchForm