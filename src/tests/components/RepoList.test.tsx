import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoList from '../../components/RepoList'; // Adjust the import path as necessary
import { RepoListComponentProps } from '../../types';
import { vi } from 'vitest';
import { mockRepoListData } from '../mockData';

// Mocking the RepoElements component
vi.mock('../../components', () => ({
    RepoElements: ({ data }) => (
        <div data-testid="repo-elements">{data?.name}</div>
    ),
}));

describe('Test for RepoList Component', () => {
    const mockClickHandler = vi.fn(); // mocking clickHandler

    test('renders loading state when loading is true', () => {
        const props: RepoListComponentProps = {
            data: [],
            loading: true,
            error: null,
            clickHandler: mockClickHandler,
        };

        render(<RepoList {...props} />);

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('renders error state when error is present', () => {
        const props: RepoListComponentProps = {
            data: [],
            loading: false,
            error: 'Something went wrong!',
            clickHandler: mockClickHandler,
        };

        render(<RepoList {...props} />);

        expect(screen.getByText(/Something went wrong!/i)).toBeInTheDocument();
        const errorElement = document.querySelector('.error');
        expect(errorElement).toBeInTheDocument();
    });

    test('renders repo list when loading is false and no error', () => {
        const props: RepoListComponentProps = {
            data: mockRepoListData,
            loading: false,
            error: null,
            clickHandler: mockClickHandler,
        };

        render(<RepoList {...props} />);

        // Ensure all repo names and descriptions are rendered
        mockRepoListData.forEach((repo) => {
            expect(
                screen.getByRole('heading', {
                    level: 3,
                    name: new RegExp(repo.name, 'i'),
                })
            ).toBeInTheDocument();
            expect(screen.getByText(repo.description)).toBeInTheDocument();
        });

        // Ensure RepoElements is rendered for each repo
        mockRepoListData.forEach(async (repo) => {
            const repoElements = await screen.findByTestId('repo-elements');
            expect(repoElements).toHaveTextContent(repo.name);
        });
    });

    test('calls clickHandler when a repo name is clicked', () => {
        const props: RepoListComponentProps = {
            data: mockRepoListData,
            loading: false,
            error: null,
            clickHandler: mockClickHandler,
        };

        render(<RepoList {...props} />);

        // Click on the first repo's name
        const repoNameElement = screen.getByRole('heading', {
            level: 3,
            name: new RegExp(mockRepoListData[0].name, 'i'),
        });
        fireEvent.click(repoNameElement);

        // Check if the clickHandler was called with the correct repo name
        expect(mockClickHandler).toHaveBeenCalledTimes(1);
        expect(mockClickHandler).toHaveBeenCalledWith(mockRepoListData[0].name);
    });
});
