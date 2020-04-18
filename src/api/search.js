import { get } from '../helpers/api-helper';
import { GITHUB_SEARCH_API } from '../helpers/url-helper';

export const getReposByName = async (name, page, perPage) => {
    const url = `${GITHUB_SEARCH_API}?q=${name}&page=${page}&per_page=${perPage}`;
    try {
        const { data } = await get(url);
        return data;
    } catch (exception) {
        console.error(exception);
        throw exception;
    }
};
