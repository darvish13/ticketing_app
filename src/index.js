import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import theme from './react/theme/myTheme'
import store from './redux/store/store'
import { Switch, Router, Route } from 'react-router-dom'
import { history } from './react/history'
import Login from './react/containers/LoginForm'
import 'bootstrap-css-only'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { StylesProvider, jssPreset } from '@material-ui/styles';
import RegisterUserForm from './react/containers/RegisterUserForm';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })



ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme} >
            <StylesProvider jss={jss}>
                <Router history={history}>
                    <Switch>

                        <Route path="/login" component={Login} />
                        <Route path='/register' component={RegisterUserForm} />
                    
                        <App />

                    </Switch>
                </Router >
            </StylesProvider>
        </ThemeProvider>
    </Provider>
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()