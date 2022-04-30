import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { TextInput, TextInputProps } from './index';

afterEach(() => {
  cleanup()
})

describe('Shold Render All Elements', () => {
  test('Should render label tag', () => {
    render(<TextInput name={''} label={''} />);
    const LabelElement = screen.getByTestId('text-input-label-1');
    expect(LabelElement).toBeInTheDocument();
  })
  test('Should render input tag', () => {
    render(<TextInput name={''} label={''} />);
    const InputElement = screen.getByTestId('text-input-1');
    expect(InputElement).toBeInTheDocument();
  })
})

describe('Should Include Provided Props', () => {

  const propValues: TextInputProps = {
    id: 'test-id',
    type: 'text',
    name: 'test-name',
    label: 'tesl label',
    placeholder: 'test placeholder',
    isDisabled: false,
    customClassName: 'test class',
    value: 'test-value'
  }

  test('Should include provided props in label tag', () => {

    render(<TextInput
      id={propValues.id}
      type={propValues.type}
      name={propValues.name}
      label={propValues.label}
      placeholder={propValues.placeholder}
      isDisabled={propValues.isDisabled}
      customClassName={propValues.customClassName}
      value={propValues.value}
    />);
    const LabelElement = screen.getByTestId('text-input-label-1');
    expect(LabelElement).toHaveTextContent(propValues.label)
    expect(LabelElement).toHaveAttribute('for', propValues.id)
  })

  test('Should include provided props in input tag', () => {

    render(<TextInput
      id={propValues.id}
      type={propValues.type}
      name={propValues.name}
      label={propValues.label}
      placeholder={propValues.placeholder}
      isDisabled={propValues.isDisabled}
      customClassName={propValues.customClassName}
      value={propValues.value}
    />);
    const InputElement = screen.getByTestId('text-input-1');
    expect(InputElement).toHaveAttribute('id', propValues.id)
    expect(InputElement).toHaveAttribute('type', propValues.type)
    expect(InputElement).toHaveAttribute('name', propValues.name)
    expect(InputElement).toHaveAttribute('placeholder', propValues.placeholder)
    expect(InputElement).toHaveAttribute('value', propValues.value)
    expect(InputElement).not.toHaveAttribute('disabled')
  })

  test('Should be able to disble', () => {
    const propValues: TextInputProps = {
      id: 'test-id',
      type: 'text',
      name: 'test-name',
      label: 'tesl label',
      placeholder: 'test placeholder',
      isDisabled: true,
      customClassName: 'test class',
    }
    render(<TextInput
      id={propValues.id}
      type={propValues.type}
      name={propValues.name}
      label={propValues.label}
      placeholder={propValues.placeholder}
      isDisabled={propValues.isDisabled}
      customClassName={propValues.customClassName}
    />);
    const InputElement = screen.getByTestId('text-input-1');
    expect(InputElement).toHaveAttribute('disabled')
  })
})

describe('Should function', () => {
  
  const propValues: TextInputProps = {
    id: 'test-id',
    type: 'text',
    name: 'test-name',
    label: 'tesl label',
    placeholder: 'test placeholder',
    isDisabled: false,
    customClassName: 'test class',
  }
  const text= 'value';
  const modifiedText= ' updated';

  const WrapperElement = () => {
    const [val, setVal] = useState(text)
    return(
      <>
      <TextInput
      id={propValues.id}
      type={propValues.type}
      name={propValues.name}
      label={propValues.label}
      placeholder={propValues.placeholder}
      isDisabled={propValues.isDisabled}
      customClassName={propValues.customClassName}
      value={val}
      onChange={setVal}
    />
      </>
    )
  }
  
  test('Should Change Value When Active', async () => {
    const user = userEvent.setup()

    render(<WrapperElement/>);
    const InputElement = screen.getByTestId('text-input-1');
    await user.click(InputElement)
    await user.keyboard(modifiedText)
    
    expect(InputElement).toHaveAttribute('value', text+modifiedText) 
  })

  test('Should Not Change Value When Disabled', async () => {
    const user = userEvent.setup()
    propValues.isDisabled = true;

    render(<WrapperElement/>);
    const InputElement = screen.getByTestId('text-input-1');
    await user.click(InputElement)
    await user.keyboard(modifiedText)
    
    expect(InputElement).not.toHaveAttribute('value', text+modifiedText) 
  })
})





