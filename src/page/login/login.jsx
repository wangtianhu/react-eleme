import React, { Component } from 'react'
import { NavBar, Icon, Button } from 'antd-mobile';

import AlerTip from '@/components/alert_tip/alert_tip'

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
        switch (type) {
        }
        this.setState(newState)

    }
    changePasswordType() {
        this.setState({
            showPwd: !this.state.showPwd
        })
    }
    closeTip = () => {
        this.setState({
            hasAlert:false
        })
    }
    mobileLogin = async() => {
        let alertText,ifshowAlert;
        // 判断是不是有手机号 
        if(!this.state.userAccount){
            alertText = '请输入 手机号/邮箱/用户名'
            ifshowAlert = true
        }else if(!this.state.password){
            alertText = '请输入用户密码'
            ifshowAlert = true
        }
        if(ifshowAlert){
            this.setState({
                alertText,
                hasAlert:true
            })
            return
        }
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
                        <input type="text" placeholder="账号" autoComplete="off" maxLength="11" value={this.state.userAccount} onChange={this.handleInput.bind(this, 'userAccount')}/>
                    </section>
                    <section className="input-container">
                        {!this.state.showPwd ? <input type="text" autoComplete="off" placeholder="密码" value={this.state.password} onChange={this.handleInput.bind(this, 'password')} /> :
                            <input type="password" placeholder="密码" autoComplete="off" value={this.state.password} onChange={this.handleInput.bind(this, 'password')} />}
                        <div className={`button-swich ${!this.state.showPwd ? 'trans_swich' : ''}`}>
                            <div className={`cirle-swich ${this.state.showPwd ? 'trans_right' : ''}`} onClick={this.changePasswordType.bind(this)}>
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
                <div className="login-button"  onClick={this.mobileLogin}>
                    <Button type="primary" style={{ margin: '10px', backgroundColor: '#4cd964' }}>登录</Button>
                </div>
                {this.state.hasAlert && <AlerTip logout={() => {return false}}  closeTip={this.closeTip} alertText={this.state.alertText}/>}
            </div>
        )
    }
}
export default Login