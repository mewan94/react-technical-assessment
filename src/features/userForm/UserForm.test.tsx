import { render, screen, cleanup } from '@testing-library/react';
import {UserForm} from './UserForm'

afterEach(() => {
    cleanup()
})

test('Should render UserForm component', () => {
    render(<UserForm/>);
    const userFormElement = screen.getByTestId('user-form-1');
    expect(userFormElement).toBeInTheDocument();
})

// test('Should render html form', () => {
//     render(<UserForm/>);
//     const userFormElement = screen.getByTestId('user-form-1');
//     expect(userFormElement).toContainHTML('<form>');
// })

