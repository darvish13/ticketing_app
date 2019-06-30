import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from './react/history'
import withAuth from './react/components/withAuth'
import Header from './react/containers/Header'
import Main from './react/containers/Main'
import Footer from './react/components/Footer'
import { setAuthInfo } from './redux/actions/authActions'
import _404 from './react/components/_404'
import SuccessMessages from './react/containers/SuccessMessages'
import ErrorMessages from './react/containers/ErrorMessages'
import Tickets from './react/containers/Tickets';


class App extends Component {

  componentDidMount() {
    const authInfo = JSON.parse(sessionStorage.getItem('authInfo'))

    if (authInfo) {
      this.props.dispatch(setAuthInfo(authInfo))
    }
    else {
      history.push('/login')
    }
  }

  render() {
    return (
      <Fragment>
        <main dir='rtl'>
          <Header />
          <SuccessMessages />
          <ErrorMessages />

          <section style={{ minHeight: '85vh' }}>
            <Switch>
              <Route path='/' exact component={withAuth(Main)} />
              <Route path='/tickets' component={withAuth(Tickets)} />
              <Route component={_404} />
            </Switch>
          </section>

          <Footer />
        </main>
      </Fragment >
    )
  }
}

export default withRouter(connect()(App))