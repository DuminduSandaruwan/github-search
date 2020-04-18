import * as _ from 'lodash';
import { FETCH_REPOS_BY_NAME, FETCH_REPOS_BY_NAME_SUCCESS, FETCH_REPOS_BY_NAME_ERROR } from '../actions/repos';

const initialState = {repos: {}, errors: {}, isLoading: false};

export default function repos(state = initialState, action) {
    switch (action.type) {
        case FETCH_REPOS_BY_NAME: {
            return {
                ...state,
                isLoading: true
            };
        }

        case FETCH_REPOS_BY_NAME_SUCCESS: {
            let data = _.cloneDeep(state);
            data.repos = action.payload;
            data.errors = {};
            data.isLoading = false;
            return { ...data };
        }

        case FETCH_REPOS_BY_NAME_ERROR: {
            let data = _.cloneDeep(state);
            data.errors = action.payload;
            data.isLoading = false;
            return { ...data };
        }
        default: {
            return state;
        }
    }
}
