import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './HeaderStyle.css'

class Header extends React.Component {

    renderLinks = () => {

        if(this.props.authenticated){
            return(
                <div>
                    <Link to="/signout">Sign Out</Link>
                    <Link to="/feature">Feature</Link>
                </div>
            )
        } else {
            return(
                <div>
                    <Link to="/signup">Signup</Link>
                    <Link to="/signin">Signin</Link>    
                </div>
            )
        }

    }

    render(){
        return(
            <div className="header">
                <Link to="/">Redux Auth</Link>
                {this.renderLinks()}
            </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)