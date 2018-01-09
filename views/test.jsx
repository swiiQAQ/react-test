import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    exact
} from 'react-router-dom'
import Login from './login'
import Register from './register'
import Home from './Home'
import {get,post} from '../server/fetch.js'
import axios from 'axios'

class Test extends React.Component {
    constructor(props){
        super(props);
        this.getTable = this.getTable.bind(this);
        this.getIniProps = this.getIniProps.bind(this);
        this.config = {
            transformRequest: [
                function (data) {
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }
            ],
            transformResponse: [
                function (data) {
                    return data
                }
            ],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                "Access-Control-Allow-Origin" : "*"
            },
            timeout: 10000,
            responseType: 'json'
        };
        
    }
    getIniProps(){
        
        // const res = axios.get('http://api.football-data.org/v1/competitions/426/leagueTable')
        // return {data: res.data}
        // axios.interceptors.response.use(function(res){
        //     //相应拦截器
        //     return res.data;
        // });
        // axios.get('https://ai.jd.com/index/hotWords.php?pin=&uuid=15139120592751527606794&callback=jsonpHotWords',this.config).then(function(res){
        //     console.log(res);
        // })
        get('https://ai.jd.com/index/hotWords.php?pin=&uuid=15139120592751527606794&callback=jsonpHotWords');
        
    }
    getTable(){
        // var a  = get('/user/getUser');

    }
    render() {
        this.getIniProps();
        return (
            <div className="indexPage">
                <p className="indexTitle">Index</p>
                <p onClick={this.getTable}>Create New</p>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Test