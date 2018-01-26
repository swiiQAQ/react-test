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
import { get, post } from '../server/fetch.js'

class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '' }
        this.getIniProps = this.getIniProps.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentDidMount() {
        // debugger;
        this.getIniProps()
    }
    getIniProps() {
        let _this = this;
        get('/user/getUsers').then(function (res) {
            console.log(res);
            _this.setState({ data: res });
        })
    }
    deleteItem(){
        let _this = this;
        let id = this.refs.itemId.id;
        let params = {
            id: id,
        }
        post('user/delete',params).then((res)=>{
            get('/user/getUsers').then((res)=>{
                _this.setState({data:res});
            })
        })
    }
    jumpPage(){
        let data={
            id: this.refs.itemId.id,
            username: this.refs.username.innerHTML,
            password: this.refs.password.innerHTML
        }
        let path = {
            pathname: '/update',
            state: data
        }
        this.props.history.push(path);
    }
    render() {
        let table;
        if (this.state.data) {
            table = this.state.data.map((value, index) => {
                return <p className="table_td" ref="itemId" id={value._id}>
                            <span ref="username">{value.userName}</span>
                            <span ref="password">{value.password}</span>
                            {/* <Link to="/update">
                                <label>edit</label>
                            </Link> */}
                            <label onClick={this.jumpPage}>edit</label>
                            <label onClick={this.deleteItem}>delete</label>
                        </p>
            })
        }
        return (
            <div>
                <Link to='/insert'>
                    <p>Create New</p>
                </Link>
                <div className="fakeTable">
                    <p className="table_tt">
                        <span>UserName</span>
                        <span>Password</span>
                    </p>
                    {table}
                </div>
            </div>
        )
    }
}

export default Find