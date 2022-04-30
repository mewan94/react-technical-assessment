import { render, screen, cleanup } from '@testing-library/react';
import UserForm from './userForm'
import { Provider } from 'react-redux';
import { store } from './../../app/store';

afterEach(() => {
    cleanup()
})

test('Should render UserForm component', () => {
    render(<Provider store={store}><UserForm metaData={[]}/></Provider>);
    const userFormElement = screen.getByTestId('user-form-1');
    expect(userFormElement).toBeInTheDocument();
})

