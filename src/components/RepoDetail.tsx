import { RepoDetailComponentProps } from '../types';
import { RepoElements } from '../components';

const RepoDetail = (props: RepoDetailComponentProps) => {
    const { data, loading, error, clickHandler } = props;

    // Return loading
    if (loading) {
        return <div>Loading...</div>;
    }

    // Return an error message if there was an error
    if (error) {
        return <div className="error">{error}</div>;
    }
    return (
        <div className="detail">
            <a
                className="back-to-home"
                href="#"
                onClick={(e: React.MouseEvent) => clickHandler(e)}
            >
                Back to Home
            </a>
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
            <p data-testid="languages">
                <label>language(s):</label> {data?.language}
            </p>
            <RepoElements data={data || null} />

            <a data-testid="view-repo" href={data?.html_url} target="_blank">
                View Repo
            </a>
        </div>
    );
};
export default RepoDetail;
