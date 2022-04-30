import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MobileNoInput, MobileNoInputProps } from './index';

afterEach(() => {
  cleanup()
})

describe('Shold Render All Elements', () => {
  test('Should render label tag', () => {
    render(<MobileNoInput name={''} label={''} />);
    const LabelElement = screen.getByTestId('text-input-label-1');
    expect(LabelElement).toBeInTheDocument();
  })
  test('Should render input tag', () => {
    render(<MobileNoInput name={''} label={''} />);
    const InputElement = screen.getByTestId('text-input-1');
    expect(InputElement).toBeInTheDocument();
  })
})

describe('Should Include Provided Props', () => {

  const propValues: MobileNoInputProps = {
    id: 'test-id',
    type: 'text',
    name: 'test-name',
    label: 'tesl label',
    placeholder: 'test placeholder',
    isDisabled: false,
    customClassName: 'test class',
    value: '12121231234'
  }

  test('Should include provided props in label tag', () => {

    render(<MobileNoInput
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

    render(<MobileNoInput
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
    expect(InputElement).toHaveAttribute('value', '+(12) 12-123 1234')
    expect(InputElement).not.toHaveAttribute('disabled')
  })

  test('Should be able to disble', () => {
    const propValues: MobileNoInputProps = {
      id: 'test-id',
      type: 'text',
      name: 'test-name',
      label: 'tesl label',
      placeholder: 'test placeholder',
      isDisabled: true,
      customClassName: 'test class',
    }
    render(<MobileNoInput
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
  
  const propValues: MobileNoInputProps = {
    id: 'test-id',
    type: 'text',
    name: 'test-name',
    label: 'tesl label',
    placeholder: 'test placeholder',
    isDisabled: false,
    customClassName: 'test class',
  }
  const text= '12121';
  const modifiedText= '231234';

  const WrapperElement = () => {
    const [val, setVal] = useState(text)
    return(
      <>
      <MobileNoInput
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
  
  test('Should Change Value and format When Active', async () => {
    const user = userEvent.setup()

    render(<WrapperElement/>);
    const InputElement = screen.getByTestId('text-input-1');
    await user.click(InputElement)
    await user.keyboard(modifiedText)
    
    expect(InputElement).toHaveAttribute('value', '+(12) 12-123 1234') 
  })

  test('Should Not Change Value When Disabled', async () => {
    const user = userEvent.setup()
    propValues.isDisabled = true;

    render(<WrapperElement/>);
    const InputElement = screen.getByTestId('text-input-1');
    await user.click(InputElement)
    await user.keyboard(modifiedText)
    
    expect(InputElement).not.toHaveAttribute('value', '+(12) 12-123 1234') 
  })
})





