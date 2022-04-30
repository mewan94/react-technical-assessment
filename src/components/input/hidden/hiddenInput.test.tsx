import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { HiddenInput, HiddenInputProps } from './index';

afterEach(() => {
  cleanup()
})

describe('Shold Render All Elements', () => {
  test('Should render input tag', () => {
    render(<HiddenInput label={''} value={''} isHidden={true} />);
    const InputElement = screen.getByTestId('hidden-input-1');
    expect(InputElement).toBeInTheDocument();
  })
})

describe('Should Include Provided Props', () => {

  const propValues: HiddenInputProps = {
    label: 'test-hidden-input',
    value: '123',
    isHidden: true
  }

  test('Should include provided props in label tag', () => {

    render(<HiddenInput
      label={propValues.label} 
      value={propValues.value} 
      isHidden={propValues.isHidden}
    />);
    const LabelElement = screen.getByTestId('hidden-input-1');
    expect(LabelElement).toHaveAttribute('name', propValues.label)
    expect(LabelElement).toHaveAttribute('value', propValues.value)
    expect(LabelElement).toHaveAttribute('hidden')
    expect(LabelElement).toHaveAttribute('readOnly')
  })

})



