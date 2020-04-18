import React, {useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import * as _ from 'lodash';

const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const Message = props => {
    const classes = useStyles();
    const errors = useSelector(state => state.repos.errors);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (!_.isEmpty(errors)) setOpen(true);
    }, [errors])


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {!_.isEmpty(errors) && (<div className={classes.root}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        {errors.message}
                    </Alert>
                </Snackbar>
            </div>)}
        </>
    );
}
