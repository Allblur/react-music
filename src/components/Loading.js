import React, { Component } from 'react'

class Loading extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="loading">
				<div className="svg">
					<svg width='70px' height='70px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-balls">
					    <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
					    <g transform="rotate(0 50 50)">
					        <circle r="5" cx="30" cy="50">
					            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;19.999999999999996 -20" keyTimes="0;1" />
					            <animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#51cacc;#9df871" />
					        </circle>
					    </g>
					    <g transform="rotate(90 50 50)">
					        <circle r="5" cx="30" cy="50">
					            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;19.999999999999996 -20" keyTimes="0;1" />
					            <animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#9df871;#e0ff77" />
					        </circle>
					    </g>
					    <g transform="rotate(180 50 50)">
					        <circle r="5" cx="30" cy="50">
					            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;19.999999999999996 -20" keyTimes="0;1" />
					            <animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#e0ff77;#de9dd6" />
					        </circle>
					    </g>
					    <g transform="rotate(270 50 50)">
					        <circle r="5" cx="30" cy="50">
					            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;19.999999999999996 -20" keyTimes="0;1" />
					            <animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#de9dd6;#51cacc" />
					        </circle>
					    </g>
					</svg>
				</div>
				<div className="ldname">加载中...</div>
			</div>
		)
	}
}

export default Loading