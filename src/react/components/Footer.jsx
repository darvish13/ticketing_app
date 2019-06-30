import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        width: '100%',
        background: '#dc3545',
        padding: '1em'
    },
})

export default function SimpleBottomNavigation() {
    const classes = useStyles()

    return (
        <Grid container alignContent='center' justify='center' className={classes.root}>
            <Grid item>
                <span className='text-white'>© تمام حقوق برای علیرضا لواسانی محفوظ است</span>
            </Grid>
        </Grid>
    )
}