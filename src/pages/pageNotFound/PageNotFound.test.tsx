import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './PageNotFound';

describe('PageNotFound Component', () => {
    test('renders the 404 heading', () => {
        const { getByText } = render(
            <Router>
                <PageNotFound />
            </Router>
        );

        const headingElement = getByText(/404/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the Page Not Found text', () => {
        const { getByText } = render(
            <Router>
                <PageNotFound />
            </Router>
        );

        const paragraphElement = getByText(/Page Not Found/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders the Go to Home link', () => {
        const { getByText } = render(
            <Router>
                <PageNotFound />
            </Router>
        );

        const linkElement = getByText(/Go to Home/i);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
    });

    test('applies the correct classes to elements', () => {
        const { container } = render(
            <Router>
                <PageNotFound />
            </Router>
        );

        const containerElement = container.querySelector('.pagenotfoundContainer');
        expect(containerElement).toBeInTheDocument();

        const linkElement = container.querySelector('.homeLink');
        expect(linkElement).toBeInTheDocument();
    });
});
