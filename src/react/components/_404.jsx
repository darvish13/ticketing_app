import React, { Fragment } from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default () => (
    <Fragment>
        <Container maxWidth='lg' className='mt-5 pt-5'>
            <Grid container direction='column' spacing={5}>
                <Grid item xs={12}>
                    <Typography component='h1' variant='h3' className='text-center'>
                        صفحه مورد نظر شما یافت نشد
                    </Typography>
                </Grid>
                <Grid item xs={12} className='text-center'>
                        <Link to='/' className='text-dark'>
                            <Button variant='outlined'>بازگشت به خانه</Button>
                        </Link>
                </Grid>
            </Grid>
        </Container>
    </Fragment>
)