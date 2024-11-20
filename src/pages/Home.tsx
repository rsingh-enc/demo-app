import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RepoListDataType } from '../types';
import { RepoList } from '../components';
import { getRepos } from '../services/repos';

const HomePage = () => {
    const [data, setData] = useState<RepoListDataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const clickHandler = (repoName: string) => {
        // Navigate to the item detail page
        navigate(`/repo/${repoName}`);
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await getRepos();

                if (response.status === 200) {
                    setData(response.data);
                } else {
                    setError(
                        `Failed to fetch data, status code: ${response.status}`
                    );
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log(`An error occurred: ${error.message}`);
                }
                setError('Something went wrong. Please try again later');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <div className="container">
            <h1>Repositories</h1>
            <RepoList
                data={data}
                loading={loading}
                error={error}
                clickHandler={clickHandler}
            />
        </div>
    );
};
export default HomePage;
