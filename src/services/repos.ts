import { RepoServiceParams } from '../types';
import client from './api';

/**
 * Get All Repo List
 */
export const getRepos = async () => {
    return await client.get('/orgs/godaddy/repos');
};

/**
 * Get single repo by repo's name
 * @param params is object. example {name:'demo-app'}
 * @returns
 */
export const getRepoDetail = async (params: RepoServiceParams) => {
    return await client.get(`/repos/godaddy/${params?.name}`);
};
