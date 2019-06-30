import React, { Component, Fragment } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
// import withAuth from '../components/withAuth'
import { Button, Grid, Typography, Container } from '@material-ui/core'
import { connect } from 'react-redux'
import TicketsForm from './TicketsForm'
import TicketsTableAdmin from '../components/TicketsTableAdmin'
import TicketsTable from '../components/TicketsTable';
import { getAllTickets, getUserTickets } from '../../redux/actions/ticketActions';


class Tickets extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        const { token, user } = this.props.authInfo

        user.role === 'operator'
            ?
            dispatch(getAllTickets(token))
            :
            dispatch(getUserTickets(token))
    }

    render() {
        let { tickets, dispatch } = this.props
        // tickets = tickets ? tickets : null

        const { token, user } = this.props.authInfo

        return (
            <Fragment>
                <Container maxWidth='xl' className='pt-5 mt-3'>

                    <Grid container justify='flex-start' spacing={3}>
                        <Grid item md={3} xs={12} className='border-left h-100'>
                            <Grid container direction='column' spacing={5}
                                alignContent='center' justify='flex-start'
                            >
                                <Grid item></Grid>
                                <Grid item></Grid>

                                <Grid item className='text-right mb-5'>
                                    <Typography component='h1' variant='h3'>تیکت ها</Typography>
                                </Grid>
                                <Grid item className='text-right'>

                                    <Link
                                        to={user.role !== 'operator' ? '/tickets/form' : '#'}
                                        className='text-dark text-decoration-none'
                                    >
                                        <Button
                                            variant='outlined'
                                            fullWidth
                                            disabled={user.role === 'operator'}
                                        >
                                            فرم ثبت تیکت
                                        </Button>
                                    </Link>

                                </Grid>
                                <Grid item className='text-right'>
                                    <Link
                                        to='/tickets/table'
                                        className='text-dark text-decoration-none'
                                    >
                                        <Button variant='outlined' fullWidth>
                                              لیست تیکت ها
                                            </Button>
                                    </Link>
                                </Grid>

                                <Grid item></Grid>
                                <Grid item></Grid>
                                <Grid item></Grid>

                            </Grid>
                        </Grid>

                        <Grid item md={9} xs={12}>
                            <Container>

                                {
                                    /** 
                                    * @todo see whats the problem with withAuth 
                                    */
                                }
                                <Route path='/tickets/form'
                                    render={(props) => (<TicketsForm {...props} />)}
                                />

                                <Route path='/tickets/table'
                                    render={(props) => {
                                        return user.role === 'operator'
                                            ? <TicketsTableAdmin {...props}
                                                tickets={tickets}
                                                token={token}
                                                dispatch={dispatch}
                                            />
                                            : <TicketsTable {...props}
                                                tickets={tickets}
                                                token={token}
                                                dispatch={dispatch}
                                            />
                                    }}
                                />

                            </Container>
                        </Grid>
                    </Grid>


                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    tickets: state.tickets
})

export default withRouter(connect(mapStateToProps)(Tickets))