import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {useSelector} from 'react-redux';
import * as _ from 'lodash';
import { perPage } from './SearchBar'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const Paginator = props => {
    const { setPage } = props;
    const classes = useStyles();
    const repos = useSelector(state => state.repos.repos);
    return <>
        {!_.isEmpty(repos) && repos.total_count > 0 && (
            <div className={classes.root}>
                <Pagination onChange={(event, page) => setPage(page)} count={Math.ceil(repos.total_count/perPage)} />
            </div>
        )}
    </>
}


