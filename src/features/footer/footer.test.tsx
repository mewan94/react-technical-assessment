import { render, screen, cleanup } from '@testing-library/react';
import Footer from './footer';

afterEach(() => {
    cleanup()
})

test('Should render Footer component', () => {
    render(<Footer title='test 1'/>);
    const FooterElement = screen.getByTestId('footer-1');
    expect(FooterElement).toBeInTheDocument();
})

test('Should render Footer title', () => {
    const title = 'test title'
    render(<Footer title={title}/>);
    const FooterElement = screen.getByTestId('footer-1');
    expect(FooterElement).toHaveTextContent(title)
})