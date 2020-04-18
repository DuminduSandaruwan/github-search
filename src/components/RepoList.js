import React from 'react';
import { useSelector } from 'react-redux';
import * as _ from 'lodash';
import { v4 } from 'uuid';
import { RepoDetail } from './RepoDetail';

export const RepoList = props => {

    const repos = useSelector(state => state.repos.repos);

    return <>
        {!_.isEmpty(repos) && repos.items.length > 0 && repos.items.map(repo => {
            return (<RepoDetail repo={repo} key={v4()}/>);
        })}
        </>
};
