import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Grid, Typography, Container } from '@material-ui/core'
import jMoment from 'moment-jalaali'
import 'moment/locale/fa'

const Main = ({ loggedInUser, notices }) => {

    if (loggedInUser) {
        const { name } = loggedInUser

        return (
            <Fragment>
                <Container maxWidth='lg' className='pt-5 mt-3'>

                    <Grid container spacing={3} justify='flex-end' direction='column'>
                        <Grid item xs={12}>
                            <Typography component='h1' variant='h5'
                                className='text-right'
                            >{name} عزیز خوش آمدید</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component='p'
                                className='text-right'
                            >امروز {jMoment().format('dddd jYYYY/jMM/jDD')}</Typography>
                        </Grid>

                    </Grid>
                </Container>
            </Fragment>
        )
    }

    return (<div></div>)
}

const mapStateToProps = (state) => ({
    loggedInUser: state.auth.user,
    notices: state.publicNotices
})

export default connect(mapStateToProps)(Main
)