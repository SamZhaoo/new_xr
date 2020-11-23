import React, { Component, Fragment } from 'react'
import '../styles/login.less'
import '../styles/iconfont.less'
import { Image, Checkbox, Menu, Input, Button } from 'antd'
import { PhoneOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
const { Search } = Input
class Login extends Component {
	constructor(props) {
		super(props)
		this.state = { current: 'quick', yzmNum: 61, disabledFlag: false }
		this.getYzm = this.getYzm.bind(this)
		this.onChange = this.onChange.bind(this)
		this.openHomePage = this.openHomePage.bind(this)
	}
	render() {
		const { current, yzmNum, disabledFlag } = this.state
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
									<Button
										type="primary"
										disabled={disabledFlag}
										className="login_btn"
										onClick={this.openHomePage}
									>
										登 录
									</Button>
									<Checkbox
										onChange={this.onChange}
										defaultChecked
										className="cb_infos"
									>
										我已阅读并接受
										<a
											href="http://www.ciprun.com/agreement"
											target="_blank"
											rel="noopener noreferrer"
										>
											[服务条款]
										</a>
										<a
											href="http://www.ciprun.com/privacy"
											target="_blank"
											rel="noopener noreferrer"
										>
											[隐私权政策]
										</a>
									</Checkbox>
									<span className="register_btn">
										立即注册
									</span>
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
	handleClick = (e) => {
		console.log('click ', e)
		this.setState({ current: e.key })
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
	onChange() {
		let d = !this.state.disabledFlag
		this.setState({ disabledFlag: d })
	}
	openHomePage() {
		console.log(this.props)
		this.props.history.push("/home");
	}
}

export default Login
