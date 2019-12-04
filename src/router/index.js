import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import PernsonalCenter from "@/page/PersonalCenter/PernsonalCenter"
import Home from "@/page/home/home"
import Login from "@/page/login/login"
export default class RouteConfig extends Component {
    // 1.跳转方式有a链接跳转 最low
    render() {
        return (
            <HashRouter history={BrowserRouter}>
                <Switch>
                    <Route path="/pernsonalCenter" exact component={PernsonalCenter} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Redirect exact from='/' to='/pernsonalCenter' />
                </Switch>
            </HashRouter>
        )
    }
}
