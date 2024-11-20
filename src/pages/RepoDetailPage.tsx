import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RepoListDataType } from '../types';
import { RepoDetail } from '../components';
import { getRepoDetail } from '../services/repos';

const RepoDetailPage = () => {
    const [data, setData] = useState<RepoListDataType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const queryParams = useParams();

    const clickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        // Navigate to the item detail page
        navigate(`/`);
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await getRepoDetail({
                    name: queryParams?.name,
                });

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
    }, [queryParams?.name]);

    return (
        <div className="container">
            <RepoDetail
                loading={loading}
                error={error}
                data={data}
                clickHandler={clickHandler}
            />
        </div>
    );
};
export default RepoDetailPage;
