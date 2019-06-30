import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { connect } from 'react-redux'

class SuccessMessages extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        const { successMessages } = this.props
        if (successMessages.length !== 0) {
            this.setState({
                open: true
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.successMessages.length !== nextProps.successMessages.length) {
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
        const { successMessages } = this.props


        if (successMessages !== 0) {
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
                            <p className='text-right text-success'>پیام</p>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <p className='text-success text-right'>{successMessages.pop()}</p>
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
    successMessages: state.alertMessages.successMessages
})

export default connect(mapStateToProps)(SuccessMessages)