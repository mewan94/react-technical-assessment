import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Button, ButtonProps } from './index';

afterEach(() => {
  cleanup()
})

describe('Shold Render All Elements in Button', () => {
  test('Should render button tag', () => {
    render(<Button btnType={'button'} label={'Button'} onClick={() => { }} />);
    const ButtonElement = screen.getByTestId('button-1');
    expect(ButtonElement).toBeInTheDocument();
  })
  test('Should render span tag', () => {
    render(<Button btnType={'button'} label={'Button'} onClick={() => { }} />);
    const SpanElement = screen.getByTestId('button-span-1');
    expect(SpanElement).toBeInTheDocument();
  })
})

describe('Should Include Provided Props', () => {

  const propValues: ButtonProps = {
    id: 'test-id',
    btnType: 'button',
    label: 'Test Button',
    onClick: () => { },
    isDisabled: false
  }

  test('Should include provided props in button tag', () => {

    render(<Button
      id={propValues.id}
      btnType={propValues.btnType}
      label={propValues.label}
      onClick={propValues.onClick}
      isDisabled={propValues.isDisabled}
    />);
    const ButtonElement = screen.getByTestId('button-1');
    expect(ButtonElement).toHaveAttribute('id', propValues.id)
    expect(ButtonElement).toHaveAttribute('type', propValues.btnType)
  })

  test('Should include provided props in span tag', () => {

    render(<Button
      id={propValues.id}
      btnType={propValues.btnType}
      label={propValues.label}
      onClick={propValues.onClick}
      isDisabled={propValues.isDisabled}
    />);
    const SpanElement = screen.getByTestId('button-span-1');
    expect(SpanElement).toHaveTextContent(propValues.label)

  })

})

describe('Should function', () => {

  const propValues: ButtonProps = {
    id: 'test-id',
    btnType: 'button',
    label: 'Test Button',
    onClick: () => { },
    isDisabled: false
  }

  const WrapperElement = () => {
    const [status, setStatus] = useState(false)
    return (
      <>
        <span data-testid='notification-1'>{status ? 'success' : 'fail'}</span>
        <Button
          id={propValues.id}
          btnType={propValues.btnType}
          label={propValues.label}
          onClick={() => setStatus(true)}
          isDisabled={propValues.isDisabled}
        />
      </>
    )
  }

  test('Should Call onClick function When Active', async () => {
    const user = userEvent.setup()

    render(<WrapperElement/>);
    const InputElement = screen.getByTestId('button-1');
    await user.click(InputElement)
    const NotificationElement1 = screen.getByTestId('notification-1');

    expect(NotificationElement1).toHaveTextContent('success')
  })

  test('Should Not Call onClick function When Disabled', async () => {
    const user = userEvent.setup()
    propValues.isDisabled = true;

    render(<WrapperElement/>);
    const InputElement = screen.getByTestId('button-1');
    await user.click(InputElement)
    const NotificationElement2 = screen.getByTestId('notification-1');
    expect(NotificationElement2).toHaveTextContent('fail')
  })
})





