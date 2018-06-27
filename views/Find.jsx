import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    exact
} from 'react-router-dom'
import { get, post } from '../server/fetch.js'

class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '' }
        this.getIniProps = this.getIniProps.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.jumpPage = this.jumpPage.bind(this);
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
    deleteItem(e){
        var id = e.target.dataset.id;
        var index = e.target.dataset.index;
        let params = {
            id: id,
        }
        post('user/delete',params).then((res)=>{
            console.log(res);
            if(res.status){
                var arr = this.state.data;
                arr.splice(index,1);
                this.setState({ data: arr});
            }
        })
    }
    jumpPage(e){
        var id = e.target.dataset.id;
        var index = e.target.dataset.index;
        let data={
            id: id,
            username: this.refs['username'+index].innerHTML,
            password: this.refs['password'+index].innerHTML
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
                return <p className="table_td"  ref="itemId" key={value._id} >
                            <span ref={'username'+index}>{value.userName}</span>
                            <span ref={'password'+index}>{value.password}</span>
                            {/* <Link to="/update">
                                <label>edit</label>
                            </Link> */}
                            <label data-index={index} data-id={value._id} onClick={this.jumpPage}>edit</label>
                            <label data-index={index} data-id={value._id} onClick={this.deleteItem}>delete</label>
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