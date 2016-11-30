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
						<div className="ri-list ri-aibum-list" key={v.id}>
							<span className="cover-imgurl"><img src={v.picUrl} alt={v.name} width="60" /></span>
							<span className="playlist-name">{v.name}</span>
							<span className="creator-name">by&nbsp;&nbsp;<i>{v.artists[0].name}</i></span>
							<span className="playlist-count">{v.company}</span>
						</div>
					)
				})}</div>
			</div>
		)
	}
}

export default SearchResultAlbum