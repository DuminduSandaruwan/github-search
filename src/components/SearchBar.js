import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import debounce from 'lodash/debounce';
import { fetchRepositories } from '../actions/repos';

export const perPage = 12;

export const SearchBar = props => {
    const { page } = props;
    const [searchValue, setSearchValue] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        if(searchValue) dispatch(debounce(fetchRepositories(searchValue, page, perPage), 1000))
    }, [searchValue, page])

    return <TextField
        id="filled-full-width"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
            shrink: true,
        }}
        onChange={e => setSearchValue(e.target.value)}
        variant="filled"
        placeholder="Find Repositories"
    />
}
