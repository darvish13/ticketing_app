import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { connect } from 'react-redux'

class ErrorMessages extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        const { errorMessages } = this.props
        if (errorMessages.length !== 0) {
            this.setState({
                open: true
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.errorMessages.length !== nextProps.errorMessages.length) {
            this.setState({
                open: true
            })
        }
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    render() {
        const { errorMessages } = this.props

        if (errorMessages.length !== 0) {
            return (
                <section>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        fullWidth
                        maxWidth='md'
                    >
                        <DialogTitle id="alert-dialog-title">
                            <p className='text-right text-danger'>هشدار</p>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <p className='text-danger text-right'>{errorMessages.pop()}</p>
                            </DialogContentText>
                        </DialogContent>

                    </Dialog>
                </section>
            )
        }

        else {
            return <div></div>
        }
    }

}

const mapStateToProps = (state) => ({
    errorMessages: state.alertMessages.errorMessages
})

export default connect(mapStateToProps)(ErrorMessages)