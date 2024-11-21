import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoElements from '../../components/RepoElements';
import { RepoElementsComponentProps } from '../../types';
import { mockRepoData } from '../mockData';

describe('Test for RepoElements Component', () => {
    test('renders all elements when {hide}* props are false', () => {
        const props: RepoElementsComponentProps = {
            hideOpenIssue: false,
            hideStar: false,
            hideWatch: false,
            hideFork: false,
            data: mockRepoData,
        };

        render(<RepoElements {...props} />);

        // Check if all items are rendered
        expect(screen.getByText(/Froks: 10/i)).toBeInTheDocument();
        expect(screen.getByText(/Open Issues: 5/i)).toBeInTheDocument();
        expect(screen.getByText(/Watch: 100/i)).toBeInTheDocument();
        expect(screen.getByText(/Star: 50/i)).toBeInTheDocument();
    });

    test('hides {Open Issues} item when {hideOpenIssue} is true', () => {
        const props: RepoElementsComponentProps = {
            hideOpenIssue: true,
            hideStar: false,
            hideWatch: false,
            hideFork: false,
            data: mockRepoData,
        };

        render(<RepoElements {...props} />);

        // Ensure the Open Issues item is not rendered
        expect(screen.queryByText(/Open Issues:/i)).not.toBeInTheDocument();
    });

    test('hides {Star} item when {hideStar} is true', () => {
        const props: RepoElementsComponentProps = {
            hideOpenIssue: false,
            hideStar: true,
            hideWatch: false,
            hideFork: false,
            data: mockRepoData,
        };

        render(<RepoElements {...props} />);

        // Ensure the Star item is not rendered
        expect(screen.queryByText(/Star:/i)).not.toBeInTheDocument();
    });

    test('hides {Watch} item when {hideWatch} is true', () => {
        const props: RepoElementsComponentProps = {
            hideOpenIssue: false,
            hideStar: false,
            hideWatch: true,
            hideFork: false,
            data: mockRepoData,
        };

        render(<RepoElements {...props} />);

        // Ensure the Watch item is not rendered
        expect(screen.queryByText(/Watch:/i)).not.toBeInTheDocument();
    });

    test('hides {Fork} item when {hideFork} is true', () => {
        const props: RepoElementsComponentProps = {
            hideOpenIssue: false,
            hideStar: false,
            hideWatch: false,
            hideFork: true,
            data: mockRepoData,
        };

        render(<RepoElements {...props} />);

        // Ensure the Fork item is not rendered
        expect(screen.queryByText(/Froks:/i)).not.toBeInTheDocument();
    });

    test('hides all elements when {hide}* props are true', () => {
        const props: RepoElementsComponentProps = {
            hideOpenIssue: true,
            hideStar: true,
            hideWatch: true,
            hideFork: true,
            data: mockRepoData,
        };

        render(<RepoElements {...props} />);

        // Ensure all the items are hidden
        expect(screen.queryByText(/Froks:/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Open Issues:/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Watch:/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Star:/i)).not.toBeInTheDocument();
    });
});
