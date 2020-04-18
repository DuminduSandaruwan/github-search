import { getReposByName } from '../api/search';

export const FETCH_REPOS_BY_NAME = 'FETCH_REPOS_BY_NAME';
export const FETCH_REPOS_BY_NAME_SUCCESS = 'FETCH_REPOS_BY_NAME_SUCCESS';
export const FETCH_REPOS_BY_NAME_ERROR = 'FETCH_REPOS_BY_NAME_ERROR';

export function fetchReposByNameSuccess(repos) {
    return {
        type: FETCH_REPOS_BY_NAME_SUCCESS,
        payload: repos
    }
}

export function fetchReposByNameError(error) {
    return {
        type: FETCH_REPOS_BY_NAME_ERROR,
        payload: error
    }
}

export function fetchReposByName() {
    return {
        type: FETCH_REPOS_BY_NAME
    }
}

export const fetchRepositories = (name, page, perPage) => async dispatch => {
    dispatch(fetchReposByName());
    try {
        const body = await getReposByName(name, page, perPage);
        dispatch(fetchReposByNameSuccess(body));

    } catch (err) {
        dispatch(fetchReposByNameError(err.response.data));
    }
};
