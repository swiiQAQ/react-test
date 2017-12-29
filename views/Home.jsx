import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="leftSideBar">
                    <Link to=''><p>HOME</p></Link>
                    <Link to=''><p>LOGIN</p></Link>
                    <Link to=''><p>REGISTER</p></Link>
                </div>
                <div>主页</div>
            </div>
        )
    }
}

export default Home