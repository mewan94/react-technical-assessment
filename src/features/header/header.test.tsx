import { render, screen, cleanup } from '@testing-library/react';
import Header from './header';

afterEach(() => {
    cleanup()
})

test('Should render Header component', () => {
    render(<Header title='test 1'/>);
    const HeaderElement = screen.getByTestId('header-1');
    expect(HeaderElement).toBeInTheDocument();
})

test('Should render Header title', () => {
    const title = 'test title'
    render(<Header title={title}/>);
    const HeaderElement = screen.getByTestId('header-1');
    expect(HeaderElement).toHaveTextContent(title)
})