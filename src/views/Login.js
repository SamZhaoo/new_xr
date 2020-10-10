import React, { Component, Fragment } from 'react'
import '../styles/login.less'
import '../styles/iconfont.less'
import { Image } from 'antd'
import { Menu } from 'antd'
import { Input } from 'antd'
import { PhoneOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
const { Search } = Input
class Login extends Component {
	constructor(props) {
		super(props)
		this.state = { current: 'quick', yzmNum: 61 }
		this.getYzm = this.getYzm.bind(this)
	}
	handleClick = (e) => {
		console.log('click ', e)
		this.setState({ current: e.key })
	}
	render() {
		const { current, yzmNum } = this.state
		return (
			<Fragment>
				<div className="main-page">
					<div className="panel">
						<div className="top">
							<Image
								width={358}
								height={36}
								src={require('../images/logo_login.png')}
							/>
							<p className="right">
								<i className="iconfont icondianhua icontell"></i>
								400-700-0065
							</p>
						</div>
						<div className="box">
							<Menu
								onClick={this.handleClick}
								selectedKeys={[current]}
								mode="horizontal"
								className="box_item"
							>
								<Menu.Item key="quick">快捷登录</Menu.Item>
								<Menu.Item key="name">账号登录</Menu.Item>
							</Menu>
							{current === 'quick' ? (
								<div key="quick" className="content">
									<Input
										size="large"
										placeholder="请输入您的手机号码"
										prefix={<PhoneOutlined />}
										className="tell_btn"
									/>
									<Search
										className="yzm_btn"
										placeholder="请输入动态码"
										prefix={<SafetyCertificateOutlined />}
										enterButton={
											yzmNum === 61
												? '获取动态吗'
												: yzmNum + 's'
										}
										size="large"
										onSearch={this.getYzm}
										style={{ width: 284 }}
									/>
								</div>
							) : (
								<div key="name" className="content">
									name
								</div>
							)}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
	getYzm(val) {
		let yzmFun = setInterval(() => {
			let f = this.state.yzmNum
			console.log(f)
			if (f === 0) {
				this.setState({
					yzmNum: 61,
				})
				clearInterval(yzmFun)
			} else {
				f--
				this.setState({
					yzmNum: f,
				})
			}
		}, 1000)
	}
}

export default Login
