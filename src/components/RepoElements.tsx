import { RepoElementsComponentProps } from '../types';
const RepoElements = (props: RepoElementsComponentProps) => {
    const { hideOpenIssue, hideStar, hideWatch, hideFork, data } = props;

    return (
        <ul className="elements">
            {!hideFork && <li>Froks: {data?.forks}</li>}
            {!hideOpenIssue && <li>Open Issues: {data?.open_issues}</li>}
            {!hideWatch && <li>Watch: {data?.watchers}</li>}
            {!hideStar && <li>Star: {data?.stargazers_count}</li>}
        </ul>
    );
};
export default RepoElements;
