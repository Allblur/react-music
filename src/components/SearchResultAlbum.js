import React, { Component, PropTypes } from 'react'

class SearchResultAlbum extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="result-item">
				<div className="ri-div">{this.props.paginationData.map((v, k) => {
					return (
						<div className="ri-list" key={v.id}>{v.name}</div>
					)
				})}</div>
			</div>
		)
	}
}

export default SearchResultAlbum