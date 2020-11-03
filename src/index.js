import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// to make use of middleware (redux-thunk)
// import the applyMiddleware function
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import Welcome from './components/Welcome'
import SignUp from './components/auth/Signup'
import Feature from './components/Feature'
import SignOut from './components/auth/Signout'
import SignIn from './components/auth/Signin'

const store = createStore(
    reducers,
    {auth: {authenticated: localStorage.getItem('token')}},
    applyMiddleware(reduxThunk)
)

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App >
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signout" component={SignOut} />
                <Route path="/feature" component={Feature} />
            </App>    
        </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root')
)