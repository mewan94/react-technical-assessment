import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { RadioBtn, RadioBtnProps } from './radio.button';

afterEach(() => {
  cleanup()
})

describe('Shold Render All Elements in Dropdown', () => {
  const propValues: RadioBtnProps = {
    id: 'testid',
    label: 'testLabel',
    value: 'testValue',
    name: 'testName',
    onChange: () => { },
    isDisabled: false
  }

  test('Should render input tag', () => {
    render(<RadioBtn
      id={propValues.id}
      label={propValues.label}
      value={propValues.value}
      name={propValues.name}
      onChange={propValues.onChange} isDisabled={false}    />);
    const InputElement = screen.getByTestId('radio-input-1');
    expect(InputElement).toBeInTheDocument();
  })

  test('Should render label tag', () => {
    render(<RadioBtn
      id={propValues.id}
      label={propValues.label}
      value={propValues.value}
      name={propValues.name}
      onChange={propValues.onChange} isDisabled={false}    />);
    const LabelElement = screen.getByTestId('radio-label-2');
    expect(LabelElement).toBeInTheDocument();
  })

})

describe('Should Include Provided Props', () => {

  const propValues: RadioBtnProps = {
    id: 'testid',
    label: 'testLabel',
    value: 'testValue',
    name: 'testName',
    onChange: () => { },
    selected: true,
    isDisabled: false
  }

  test('Should include provided props in label tag', () => {

    render(<RadioBtn
      id={propValues.id}
      label={propValues.label}
      value={propValues.value}
      name={propValues.name}
      onChange={propValues.onChange} isDisabled={false}    />);
    const LabelElement = screen.getByTestId('radio-label-2');
    expect(LabelElement).toHaveTextContent(propValues.label)
  })

  test('Should render radio tag', () => {
    render(<RadioBtn
      id={propValues.id}
      label={propValues.label}
      value={propValues.value}
      name={propValues.name}
      onChange={propValues.onChange}
      selected={propValues.selected} 
      isDisabled={false}    
      />);
    const RadioElement = screen.getByTestId('radio-input-1');
    expect(RadioElement).toHaveAttribute('id', propValues.id)
    expect(RadioElement).toHaveAttribute('name', propValues.name)
    expect(RadioElement).toHaveAttribute('value', propValues.value)
    expect(RadioElement).toHaveAttribute('checked')
  })

})





