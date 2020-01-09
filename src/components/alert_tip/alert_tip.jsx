import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './alert_tip.scss'
class AlerTip extends Component {
    static propType = {
        alertText: PropTypes.string.isRequired,//内容提示
        closeTip: PropTypes.func.isRequired,//关闭提示
        logout: PropTypes.func//退出提示
    }
    handleClick = () => {  // 关闭
        this.props.closeTip()
      }


    render() {
        return (
            <div className='alert-container'>
                <section className='tip-text-container'>
                    <div className='tip-icon'>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='tip-text'>{this.props.alertText}</div>
                    {this.props.logout('wait') ?
                        <div className='logout' >
                            <div onClick={this.handleClick}>再等等</div>
                            <div onClick={this.handleLogout}>狠心离开</div>
                        </div>
                        : <div className='confirm' onClick={this.handleClick}>确认</div>}

                </section>
            </div>

        )
    }
}
export default AlerTip