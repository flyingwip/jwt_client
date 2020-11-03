import React from 'react'
import { reduxForm, Field} from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class SignUp extends React.Component {

    onSubmit = (formProps) => this.props.signup(formProps, () => {
        this.props.history.push('/feature')
    })
    
    render(){
        // redux form provides handleSubmit 
        // - preventDefault for disabling html submit
        // - bind all values to first argument callback function (formProps)
        // descructure the handleSubmit
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit)}> 
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none" 
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />    
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign Up</button>
            </form>
        )   
    }
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.errorMessage }
}

/*
* redux form has a signature similar as the connect tag
* this is necessary to make use of the Field tag
* options object with name of the form
* export default reduxForm( {form:'signup'} )(SignUp)
*/

/*
* now with compose chain together with the redux connect function
* compose allows us to apply multiple higher-order components
* to a single component
*/
export default compose(
    connect(mapStateToProps, actions),
    reduxForm( {form:'signup'} )
)(SignUp)

