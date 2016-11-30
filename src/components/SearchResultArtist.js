import React, { Component, PropTypes } from 'react'

class SearchResultArtist extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="result-item">
				<div className="ri-div">{this.props.paginationData.map((v, k) => {
					return (
						<div className="ri-art-list" key={v.id}>
							<span className="cover-imgurl"><img src={v.picUrl ? v.picUrl : v.img1v1Url} alt={v.name} width="160" /></span>
							<div className="ri-art-name"><span className="playlist-name">{v.name}</span></div>
						</div>
					)
				})}</div>
			</div>
		)
	}
}

export default SearchResultArtist