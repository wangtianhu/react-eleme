import React, { Component } from 'react'


class PersonalCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '登录/注册',
            mobile: '暂无绑定手机',
            imgpath: '',   // 图片路径
            balance: 0,     //我的余额
            count: 0,       //优惠券个数
            pointNumber: 0, //积分数
            hasAlert: '',   // tip是否显示
            alertText: '请在手机APP中打开',
        }
    }
    render(){
        return (
            <div className='personnalCenter-container'>
                <a href="#/home">我要去home组件</a>
                <button onClick={() => this.props.history.push('home')}>通过函数方式跳转到home</button>
            </div>
        )
    }
}
export default PersonalCenter