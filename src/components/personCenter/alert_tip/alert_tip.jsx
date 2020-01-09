import React,{Component} from 'react'
import PropTypes from 'prop-types'

class AlerTip extends Component {
    static propType = {
        alertText = PropTypes.string.isRequired,//内容提示
        closeTips = PropTypes.func.isRequired,//关闭提示
        logout = PropTypes.func//退出提示
    }



    render (){
        return (

            <div className='alert-content'> 我是弹出提示 </div>

        )
    }
}
export default AlerTip