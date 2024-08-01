import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import History from './History';
import styles from './History.module.css';

const mockStore = configureStore([]);

describe('History Component', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            cat: {
                likedFact: [
                    'Cats sleep 70% of their lives.',
                    'A group of cats is called a clowder.'
                ]
            }
        });
    });

    test('renders the header correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <History />
            </Provider>
        );

        const headerElement = getByText(/Liked Facts/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('renders the list of liked facts correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <History />
            </Provider>
        );

        const firstFact = getByText(/Cats sleep 70% of their lives./i);
        const secondFact = getByText(/A group of cats is called a clowder./i);

        expect(firstFact).toBeInTheDocument();
        expect(secondFact).toBeInTheDocument();
    });

    test('applies the correct classes to elements', () => {
        const { container } = render(
            <Provider store={store}>
                <History />
            </Provider>
        );

        const containerElement = container.querySelector(`.${styles.container}`);
   

        expect(containerElement).toBeInTheDocument();
    });

    test('displays the correct index for each fact', () => {
        const { getByText } = render(
            <Provider store={store}>
                <History />
            </Provider>
        );

        const firstIndex = getByText('1.');
        const secondIndex = getByText('2.');

        expect(firstIndex).toBeInTheDocument();
        expect(secondIndex).toBeInTheDocument();
    });
});
