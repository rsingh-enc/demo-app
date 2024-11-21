import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import RepoDetail from '../../components/RepoDetail'; // Adjust the import path as necessary
import { RepoDetailComponentProps } from '../../types';
import { mockRepoData } from '../mockData';

// Mocking the RepoElements
vi.mock('../../components', () => ({
    RepoElements: ({ data }) => (
        <div data-testid="repo-elements">{data?.name}</div>
    ),
}));

describe('Test for RepoDetail Component', () => {
    const mockClickHandler = vi.fn(); // mocking clickHandler

    test('renders loading state when loading is true', () => {
        const props: RepoDetailComponentProps = {
            data: null,
            loading: true,
            error: null,
            clickHandler: mockClickHandler,
        };

        render(<RepoDetail {...props} />);

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    test('renders error state when error is present', () => {
        const props: RepoDetailComponentProps = {
            data: null,
            loading: false,
            error: 'Something went wrong!',
            clickHandler: mockClickHandler,
        };

        render(<RepoDetail {...props} />);

        expect(screen.getByText(/Something went wrong!/i)).toBeInTheDocument();
        const errorElement = document.querySelector('.error');
        expect(errorElement).toBeInTheDocument();
    });

    test('renders repo details when loading is false and no error', async () => {
        const props: RepoDetailComponentProps = {
            data: mockRepoData,
            loading: false,
            error: null,
            clickHandler: mockClickHandler,
        };

        render(<RepoDetail {...props} />);

        // Check if the repo name and description are rendered
        const h1Element = screen.getByRole('heading', {
            level: 1,
            name: new RegExp(mockRepoData.name, 'i'),
        });
        expect(h1Element).toBeInTheDocument();
        expect(screen.getByText(mockRepoData.description)).toBeInTheDocument();

        // Check if the languages field is rendered
        expect(screen.getByTestId('languages')).toHaveTextContent(
            mockRepoData.language
        );

        // Check if RepoElements is rendered with the correct data
        const repoElements = await screen.getByTestId('repo-elements');
        expect(repoElements).toHaveTextContent(mockRepoData.name);

        // Check if the {View Repo} link is rendered correctly
        const viewRepoLink = screen.getByTestId('view-repo');
        expect(viewRepoLink).toBeInTheDocument();
        expect(viewRepoLink).toHaveAttribute('href', mockRepoData.html_url);
    });

    test('calls clickHandler when {Back to Home} is clicked', () => {
        const props: RepoDetailComponentProps = {
            data: mockRepoData,
            loading: false,
            error: null,
            clickHandler: mockClickHandler,
        };

        render(<RepoDetail {...props} />);

        // Find the {Back to Home} link and click it
        const backToHomeLink = screen.getByText(/Back to Home/i);
        fireEvent.click(backToHomeLink);

        // Check if the clickHandler was called
        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
});
