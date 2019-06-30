import React from 'react'
import { TextField, Container, Grid, Paper, CssBaseline, Avatar, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { withFormik, Form } from 'formik'
import { connect } from 'react-redux'
import { attempLogin } from '../../redux/actions/authActions'
import { withRouter, Link } from 'react-router-dom'

const LoginRaw = ({
    handleChange,
    isSubmitting,
    values
}) => {

    return (
        <Container className='mt-5 pt-5' maxWidth='sm'>
            <CssBaseline />

            <Paper className='p-5'>
                <Grid
                    container
                    direction='column'
                    alignContent='center'
                    className='mb-4'
                >
                    <Avatar className='bg-danger'>
                        <LockOutlinedIcon />
                    </Avatar>

                    <h5>ورود</h5>
                </Grid>

                <Form>
                    <Grid
                        container
                        direction='column'
                        spacing={2}
                        justify='space-around'
                    >
                        <Grid item xs={12}>
                            <TextField
                                label='نام کابری'
                                placeholder='ایمیل'
                                name='email'
                                type='email'
                                required
                                fullWidth
                                value={values.email}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="رمز عبور"
                                margin="normal"
                                name="password"
                                type="password"
                                required
                                fullWidth
                                value={values.password}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                                className='mt-5 mb-3 text-white'
                                disabled={isSubmitting}
                            >
                                ورود به سیستم
                            </Button>
                        </Grid>

                        <Grid item xs={12} className='text-center'>
                            <span>  ثبت نام نکرده اید؟  </span>
                            <Link to='/register' >  اینجا ثبت نام کنید  </Link>
                        </Grid>

                    </Grid>
                </Form>

            </Paper>
        </Container>
    )
}

const Login = withFormik({
    mapPropsToValues() {
        return {
            email: '',
            password: ''
        }
    },
    handleSubmit(values, { props, setSubmitting, resetForm }) {
        setSubmitting(true)

        props.dispatch(attempLogin(values))

        resetForm()
    }
})(LoginRaw)

export default withRouter(connect()(Login))
