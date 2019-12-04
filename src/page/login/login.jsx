import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

import './login.scss'
class Login extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        mobileCode: '',
        userAccount: '',
        hasAlert: false,
        alertText: '',
        password: '',
        codeNumber: '',
        captchaCodeImg: '',
        showPwd: true,
        loginWay: false
      }
      handleInput = (type, event) => {
        let value = event.target.value
        let newState = {}
        newState[type] = value
        switch (type){
        }
        this.setState(newState)
      }
      changePasswordType(){
          this.setState({
            showPwd:!this.state.showPwd
          })
      }
    render() {
        return (
            <div className='login-container'>
                <section className="login-navBar">
                    <NavBar
                        mode="dark"
                        leftContent="Back"
                    >密码登录</NavBar>
                </section>
                <form className="login-form">
                    <section className="input-container">
                        <input type="password" placeholder="账号"/>
                    </section>
                    <section className="input-container">
                    {!this.state.showPwd?<input type="text" placeholder="密码"   value={this.state.password} onChange={this.handleInput.bind(this, 'password')} />:
                        <input type="password" placeholder="密码"   value={this.state.password} onChange={this.handleInput.bind(this, 'password')} />}
                        <div className={`button-swich ${!this.state.showPwd?'trans_swich':''}`}>
                            <div className={`cirle-swich ${this.state.showPwd?'trans_right':''}`}  onClick={this.changePasswordType.bind(this)}>
                            </div>
                            <span>abc</span>
                                <span>...</span>
                        </div>
                    </section>
                    <section className="input-container">
                        <input type="text" placeholder="验证码" />
                        <div className="img-change-img">
                            <img src="" alt="" />
                            <div className="change-img">
                                <p>看不清</p>
                                <p>换一张</p>
                            </div>
                        </div>
                    </section>
                </form>
                <p className="login-tips">
                    温馨提示：未注册过的账号，登陆时自动注册
                </p>
                <p className="login-tips">
                    温馨提示：注册过的用户，凭账户密码登录
                </p>
                <div className="login-button">登录</div>
            </div>
        )
    }
}
export default Login