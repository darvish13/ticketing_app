import React from 'react'
import { TextField, Container, Grid, Paper, CssBaseline, Avatar, Button, MenuItem } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { withFormik, Form, ErrorMessage } from 'formik'
import { connect } from 'react-redux'
import { registerUser } from '../../redux/actions/authActions'
import { withRouter, Link } from 'react-router-dom'
import * as yup from 'yup'
import { errorMsg } from '../../redux/actions/alertMessageActions';


const RegisterUserRaw = ({
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
                    justify='center'
                    className='mb-4'
                >
                    <Grid item>
                        <Avatar className='bg-danger' style={{ margin: 'auto', marginBottom: '1em' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                    </Grid>

                    <Grid item>
                        <h5 className='text-center'>ایجاد کاربر جدید</h5>
                    </Grid>
                </Grid>

                <Form>
                    <Grid
                        container
                        spacing={3}
                        justify='space-around'
                    >
                        <Grid item xs={12} md={6}>
                            <TextField
                                label='نام'
                                name='name'
                                fullWidth
                                value={values.name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name='name'>
                                {err => <article
                                    className='text-danger mt-2 text-right'
                                >{err}</article>}
                            </ErrorMessage>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label='نوع کاربر'
                                name='role'
                                fullWidth
                                select
                                value={values.role}
                                onChange={handleChange}
                            >
                                <MenuItem key={1} value='user'>عادی</MenuItem>
                                <MenuItem key={2} value='operator'>اپراتور</MenuItem>
                            </TextField>
                            <ErrorMessage name='role'>
                                {err => <article
                                    className='text-danger mt-2 text-right'
                                >{err}</article>}
                            </ErrorMessage>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label='نام کابری'
                                placeholder='ایمیل'
                                name='email'
                                type='email'
                                fullWidth
                                value={values.email}
                                onChange={handleChange}
                            />
                            <ErrorMessage name='email'>
                                {err => <article
                                    className='text-danger mt-2 text-right'
                                >{err}</article>}
                            </ErrorMessage>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="رمز عبور"
                                margin="normal"
                                name="password"
                                type="password"
                                fullWidth
                                value={values.password}
                                onChange={handleChange}
                            />
                            <ErrorMessage name='password'>
                                {err => <article
                                    className='text-danger mt-2 text-right'
                                >{err}</article>}
                            </ErrorMessage>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="تکرار رمز عبور"
                                margin="normal"
                                name="password2"
                                type="password"
                                fullWidth
                                value={values.password2}
                                onChange={handleChange}
                            />
                            <ErrorMessage name='password2'>
                                {err => <article
                                    className='text-danger mt-2 text-right'
                                >{err}</article>}
                            </ErrorMessage>
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
                                ثبت اطلاعات
                            </Button>
                        </Grid>

                        <Grid item xs={12} className='text-center'>
                            <span>  ثبت نام کرده اید؟  </span>
                            <Link to='/login' >  وارد شوید  </Link>
                        </Grid>

                    </Grid>
                </Form>

            </Paper>
        </Container>
    )
}

const RegisterForm = withFormik({
    mapPropsToValues() {
        return {
            name: '',
            email: '',
            password: '',
            password2: '',
            role: ''
        }
    },
    handleSubmit(values, { props, setSubmitting, resetForm, setFieldError }) {
        setSubmitting(true)

        /**
         * @todo Findout whats wrong with setFieldError
         */
        const { password, password2 } = values
        password2 === password
            ? props.dispatch(registerUser(values))
            : props.dispatch(errorMsg('رمز ها یکی نیست'))
        // : setFieldError('password2', 'رمز ها یکی نیست')

        resetForm()
    },
    validationSchema: yup.object().shape({
        name: yup.string().required('نام الزامی است'),
        role: yup.string().required('نوع کاربر الزامی است'),
        email: yup.string().email('فرمت ایمیل صحیح نیست').required('ایمیل الزامی است'),
        password: yup.string().min(6, 'رمز عبور باید حداقل ۶ حرف باشد').required('رمز عبور الزامی است'),
        password2: yup.string().min(6, 'رمز عبور باید حداقل ۶ حرف باشد').required('تکرار رمز عبور الزامی است')
    })
})(RegisterUserRaw)

export default withRouter(connect()(RegisterForm))
