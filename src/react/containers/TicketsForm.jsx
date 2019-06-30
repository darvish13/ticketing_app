import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Form } from 'formik'
import { TextField, Button, Grid, Container } from '@material-ui/core'
import { makeNewTicket } from '../../redux/actions/ticketActions';

const TicketsFormRaw = ({
    handleChange,
    isSubmitting,
    values
}) => {

    return (
        <Container maxWidth='md'>
            <Form>
                <h3 className='text-right mt-4 mb-5'>فرم ثبت تیکت</h3>
                <Grid container spacing={8} >
                    <Grid item xs={12} md={4}>
                        <TextField
                            label='عنوان'
                            name='title'
                            onChange={handleChange}
                            value={values.title}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField
                            label='متن'
                            name='text'
                            onChange={handleChange}
                            value={values.text}
                            fullWidth
                            multiline
                        />
                    </Grid>

                    <Grid item xs={12} className='mt-4 mb-5'>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            className='text-white'
                            disabled={isSubmitting}
                            fullWidth
                        >ثبت</Button>
                    </Grid>

                </Grid>
            </Form>
        </Container>
    )
}

const TicketsForm = withFormik({
    mapPropsToValues: () => ({
        title: '',
        text: ''
    }),
    handleSubmit(values, { props, setSubmitting, resetForm }) {
        setSubmitting(true)

        props.dispatch(makeNewTicket(values, props.token))

        resetForm()
    }
})(TicketsFormRaw)

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps)(TicketsForm)