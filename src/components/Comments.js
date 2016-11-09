import React, { Component, PropTypes } from 'react'

class Comments extends Component {
	static propTypes = {
		comments: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)
	}

	renderComment(comments) {
		const hotComments = comments.hotComments || []
		const topComments = comments.topComments || []
		let cComments = comments.comments || []
		if (hotComments.length > 0) {
			cComments = cComments.concat(hotComments, topComments)
		}
		return cComments.map((elem, key) => {
			return (
				<div className="comment-wrap" key={key}>
					<div className="comment-item">
					{elem.user.nickname}评论::{elem.content}
					</div>
				</div>
			)
		})
	}

	render() {
		if (this.props.comments.comments) {
			return (<div className='song-comment'>{this.renderComment(this.props.comments)}</div>)
		}

		return (
			<div className='loading'>comments正在加载中...</div>
		)
	}
}

export default Comments