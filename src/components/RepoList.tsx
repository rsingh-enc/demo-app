import { RepoListComponentProps } from '../types';
import { RepoElements } from '../components';
const RepoList = (props: RepoListComponentProps) => {
    const { data, loading, error, clickHandler } = props;
    // Return loading
    if (loading) {
        return <div>Loading...</div>;
    }

    // Return an error message if there was an error
    if (error) {
        return <div className="error">{error}</div>;
    }
    return data.map((repo) => (
        <div key={`${repo?.name}`} className="list">
            <h3 onClick={() => clickHandler(repo?.name)}>{repo?.name}</h3>
            <p>{repo?.description}</p>
            <RepoElements hideFork={true} hideOpenIssue={true} data={repo} />
        </div>
    ));
};
export default RepoList;
