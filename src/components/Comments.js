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
				<div className="comment-wrap" key={`comment-${key}`}>
					<img
						src="http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg"
						alt="nickname"
						className="user-avt"
					/>
					<div className="comments-bx">
						<div className="comments-nickname">{elem.user.nickname}</div>
						<div className="comments-content">{elem.content}</div>
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
			<div className='loading'>加载中...</div>
		)
	}
}

export default Comments