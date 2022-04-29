import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { RadioBtnGroup, RadioBtnGroupProps } from './index';

afterEach(() => {
  cleanup()
})

describe('Shold Render All Elements in Dropdown', () => {
  const propValues: RadioBtnGroupProps = {
    name: 'test-radio-input',
    options: [],
    title: 'Test Radio Input'
  }

  test('Should render label tag', () => {
    render(<RadioBtnGroup
      name={propValues.name}
      options={propValues.options}
      title={propValues.title}
    />);
    const LabelElement = screen.getByTestId('radio-label-1');
    expect(LabelElement).toBeInTheDocument();
  })

  test('Should render radio tag', () => {
    propValues.options = [
      {
        label: '2020',
        value: '2020'
      },
      {
        label: '2021',
        value: '2021'
      }
    ]
    render(<RadioBtnGroup
      name={propValues.name}
      options={propValues.options}
      title={propValues.title}
    />);
    const RadioElements = screen.getAllByTestId('radio-input-wrapper-1');
    expect(RadioElements.length).toEqual(2);
  })
})

describe('Should function', () => {

  const propValues: RadioBtnGroupProps = {
    onChange: () => { },
    name: 'test-radio-input',
    options: [
      {
        label: '2020',
        value: '2020'
      },
      {
        label: '2021',
        value: '2021'
      }
    ],
    title: 'Test Radio Input',
    isDisabled: false
  }

  const WrapperElement = () => {
    const [selected, setSelected] = useState({
      label: 'not-selected',
      value: 'not-selected'
    })
    return (
      <>
        <span data-testid='notification-1'>{selected.label}</span>
        <RadioBtnGroup
          name={propValues.name}
          options={propValues.options}
          title={propValues.title}
          onChange={setSelected}
          isDisabled={propValues.isDisabled}
        />
      </>
    )
  }

  test('Should Call onChange function When Active', async () => {
    const user = userEvent.setup()
    render(<WrapperElement />);
    const RadioElements = screen.getAllByTestId(`radio-input-1`);
    expect(RadioElements.length).toEqual(2)
    await user.click(RadioElements[1])
    const NotificationElement1 = screen.getByTestId('notification-1');
    expect(NotificationElement1).toHaveTextContent(propValues.options[1].label)
  })

  test('Should Not Call onChange function When Disabled', async () => {
    const user = userEvent.setup()
    propValues.isDisabled = true;

    render(<WrapperElement />);
    const RadioElements = screen.getAllByTestId(`radio-input-1`);
    expect(RadioElements.length).toEqual(2)
    await user.click(RadioElements[1])
    const NotificationElement1 = screen.getByTestId('notification-1');
    expect(NotificationElement1).not.toHaveTextContent(propValues.options[1].label)
  })
})





