import React,{Component} from 'react'

class Home extends  Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                <a href="">我返回personal页面</a>
                <button onClick={()=>{this.props.history.push('pernsonalCenter')}}>通过函数方式跳转到personal</button>
            </div>
        )
    }
}
export default Home