import React from 'react';
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {LinearProgress} from "@material-ui/core";

const styles = makeStyles((theme) => {
    return createStyles({
        bar: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    })
});

export default () => {
    const classes = makeStyles();
    return(
        <div className={classes.bar}>
            <LinearProgress />
        </div>
    )
    
}