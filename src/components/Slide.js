import React, { Component } from 'react'
import Sliders from './Sliders'
import Dots from './Dots'
import styles from '../assets/style/slide.styl'

class Slide extends Component {
	constructor(props) {
		super(props)
		this.autoSlideHandler = this.autoSlideHandler.bind(this)
		this.SlideInter = null
		this.state = {
			baseWidth: this.props.baseWidth ? this.props.baseWidth : document.documentElement.clientWidth, //宽度
			startX: "",
			curX: "",
			moveX: "",
			time: 0,
			distance: 0, //移动距离
			swiper: 30, //滑动滚动触发距离
			index: 0,
			length: this.props.opts.length,
			continuous: true, //是否循环滚动
			autoSlide: true,
			slideSpeed: 2000
		}
	}

	touchStart(e) {
		this.setState({
			time: 0,
			startX: e.touches[0].pageX
		})
	}

	touchMove(e) {
		e.preventDefault()
		if(this.state.autoSlide) {
			this.stopSlideHandler();
		}
		let _curX = e.touches[0].pageX
		let _moveX = _curX - this.state.startX
		let _distance = -(this.state.index * this.state.baseWidth - _moveX)

		this.setState({
			curX: _curX,
			moveX: _moveX,
			time: 0,
			distance: _distance
		})
	}

	touchEnd(e) {
		if(Math.abs(this.state.moveX) <= this.state.swiper) {
			this.slideHandler('', '.5')
		} else {
			if(this.state.moveX > this.state.swiper) {
				this.slideHandler('prev', '.5')
			} else if(Math.abs(this.state.moveX) > this.state.swiper) {
				this.slideHandler('next', '.5')
			}
		}

		this.setState({
			moveX: 0
		})
	}

	/**
	 * index控制
	 * @param  {num} go   指定index数值
	 * @param  {num} time transition时间
	 */
	slideHandler(go, time) {
		let _index = this.state.index
		if(typeof go === "number") {
			_index = go
		} else if(go == "next") {
			_index ++
		} else if(go == "prev") {
			_index --
		}

		// 是否循环滚动
		if(this.state.continuous) {
			if(_index > this.state.length) {
				this.scrollHandler(_index, time)
				//返回第一个
				_index = 1
				setTimeout(() => {
					this.scrollHandler(_index, 0)
					this.autoSlideHandler()
					this.setState({
						index: _index
					})
				}, 500);
			} else if(_index < 1) {
				this.scrollHandler(_index, time)
				//返回最后一个
				_index = this.state.length
				setTimeout(() => {
					this.scrollHandler(_index, 0)
					this.autoSlideHandler()
					this.setState({
						index: _index
					})
				}, 500)
			} else {
				this.scrollHandler(_index, time)
				this.setState({
					index: _index
				})
			}
		} else {
			if(_index >= this.state.length) {
				_index = 0;
			} else if(_index < 0) {
				_index = this.state.length - 1;
			}
			this.scrollHandler(_index, time)
			this.setState({
				index: _index
			})
		}
	}

	/**
	 * 滚动函数
	 * @param  {num} index 指定滚动的index
	 * @param  {num} time  transition的时间
	 */
	scrollHandler(index, time) {
		this.setState({
			time: time,
			distance: -(index * this.state.baseWidth)
		})
	}

	autoSlideHandler() {
		if(this.state.autoSlide) {
			this.stopSlideHandler()
			this.SlideInter = setInterval(() => {
				this.slideHandler('next', '.5')
			}, this.state.slideSpeed)
		}
	}

	stopSlideHandler() {
		clearInterval(this.SlideInter)
	}

	componentDidMount() {
		// 循环滚动 index+1
		if(this.state.continuous) {
			let newIndex = this.state.index + 1
			this.setState({
				index: newIndex,
				distance: -(newIndex * this.state.baseWidth)
			})
		}
		this.autoSlideHandler();
	}

	render() {
		const opts = this.props.opts

		const slideStyle = {
			width: (document.documentElement.clientWidth * (opts.length + 2)) + "px",
			WebkitTransform: 'translate3d(' + this.state.distance + "px,0,0)",
			transform: 'translate3d(' + this.state.distance + "px,0,0)",
			WebkitTranstion: "all " + this.state.time + "s",
			transition: "all " + this.state.time + "s"
		}

		const sliders = opts.map((item, i) => {
			return (
				<Sliders link={item.link} src={item.src} key={i} />
			)
		})

		const dots = opts.map((item, i) => {
			return (
				<Dots key={i} active={(this.state.continuous ? (this.state.index-1) : this.state.index) == i ? 'active' : ''} />
			)
		}) 

		return (
			<div className="slide-wrap">
				<div className="slide-ul" style={slideStyle} onTouchStart={e=>this.touchStart(e)} onTouchMove={e=>this.touchMove(e)} onTouchEnd={e=>this.touchEnd(e)} onTransitionEnd={()=>this.autoSlideHandler()}>
					{this.state.continuous ? <Sliders link={opts[opts.length-1].link} src={opts[opts.length-1].src} picWidth={this.state.baseWidth} /> : ""}
					{sliders} 
					{this.state.continuous ? <Sliders link={opts[0].link} src={opts[0].src} picWidth={this.state.baseWidth} /> : ""}
				</div>
				<div className="dots-wrap">
					{dots}
				</div>
			</div>
		);
	}
}

export default Slide