export type RepoListDataType = {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    watchers: number;
    language: string;
    forks: number;
    open_issues: number;
};

export type RepoListComponentProps = {
    data: RepoListDataType[];
    loading?: boolean;
    error?: string | null;
    clickHandler: (repoName: string) => void;
};

export type RepoDetailComponentProps = {
    data: RepoListDataType | null;
    loading?: boolean;
    error?: string | null;
    clickHandler: (e: React.MouseEvent) => void;
};

export type RepoElementsComponentProps = {
    hideStar?: boolean;
    hideOpenIssue?: boolean;
    hideWatch?: boolean;
    hideFork?: boolean;
    data: RepoListDataType | null;
};

export type RepoServiceParams = {
    name: string | undefined;
};
