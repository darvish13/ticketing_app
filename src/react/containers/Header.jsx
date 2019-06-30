import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { Grid, Container } from '@material-ui/core'
import { connect } from 'react-redux'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: '#0e0e0e'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = ({ user }) => {
    const classes = useStyles()

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.reload()
    }

    if (user) {
        return (
            <header className={classes.root}>
                <AppBar position="static" color='secondary'>
                    <Toolbar>
                        <IconButton edge="start" color='inherit' className={classes.menuButton} aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Container maxWidth='xl'>
                            <Grid
                                container
                                spacing={1}
                                alignContent='center'
                                justify='space-around'
                            >
                                <Grid item>
                                    <Grid
                                        container
                                        spacing={5}
                                        justify='flex-start'
                                    >
                                        <Grid item>
                                            <Link to='/' className='text-white'>خانه</Link>
                                        </Grid>

                                        <Grid item>
                                            <Link to='/tickets' className='text-white'>تیکت ها</Link>
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Grid container
                                        justify='flex-end'
                                        alignContent='center'
                                        spacing={3}
                                    >
                                        <Grid item>
                                            <Button
                                                className='text-white border-white'
                                                variant='outlined'
                                                onClick={handleLogout}
                                            >
                                                خروج
                                        </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>


                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
    else {
        return <div></div>
    }

}

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Header)