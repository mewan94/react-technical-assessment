import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { DropDown, DropDownProps } from './index';

afterEach(() => {
  cleanup()
})

describe('Shold Render All Elements in Dropdown', () => {
  const propValues: DropDownProps = {
    name: 'Dropdown Input',
    title: 'dropdown title',
    options: [],
    onChange:() => {}
  }

  test('Should render label tag', () => {
    render(<DropDown
      name={propValues.name}
      options={propValues.options}
      title={propValues.title}
      onChange={propValues.onChange}
    />);
    const LabelElement = screen.getByTestId('dropdown-label-1');
    expect(LabelElement).toBeInTheDocument();
  })
  test('Should render select tag', () => {
    render(<DropDown
      name={propValues.name}
      options={propValues.options}
      title={propValues.title}
      onChange={propValues.onChange}
    />);
    const SelectElement = screen.getByTestId('dropdown-select-1');
    expect(SelectElement).toBeInTheDocument();
  })
  test('Should render option tag', () => {
    propValues.options = [
      {
        label: '2020',
        value: '2020'
      }
    ]
    render(<DropDown
      name={propValues.name}
      options={propValues.options}
      title={propValues.title}
      onChange={propValues.onChange}
    />);
    const SelectElement = screen.getByTestId('dropdown-option-1');
    expect(SelectElement).toBeInTheDocument();
  })
})

describe('Should Include Provided Props', () => {

  const propValues: DropDownProps = {
    name: 'Dropdown Input',
    title: 'dropdown title',
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
    onChange:() => {}
  }

  test('Should include provided props in label tag', () => {

    render(<DropDown
      name={propValues.name}
      options={propValues.options}
      title={propValues.title}
      onChange={propValues.onChange}
    />);
    const LabelElement = screen.getByTestId('dropdown-label-1');
    expect(LabelElement).toHaveTextContent(propValues.title)
  })

  test('Should include provided props in select tag', () => {

    render(<DropDown
      name={propValues.name}
      options={propValues.options}
      title={propValues.title}
      onChange={propValues.onChange}
    />);
    const SelectElement = screen.getByTestId('dropdown-select-1');
    expect(SelectElement).toHaveAttribute('name', propValues.name)
  })

  test('Should include provided props in options tags', () => {

    render(<DropDown
      name={propValues.name}
      options={propValues.options}
      title={propValues.title} 
      onChange={propValues.onChange}
      />);
    const OptionElements = screen.getAllByTestId('dropdown-option-1');
    expect(OptionElements.length).toEqual(2)
    propValues.options.forEach((op, i) => {
      expect(OptionElements[i]).toHaveTextContent(op.label)
      expect(OptionElements[i]).toHaveAttribute('value', op.value)
    })
  })

})

describe('Should function', () => {

  const propValues: DropDownProps = {
    name: 'Dropdown Input',
    title: 'dropdown title',
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
    onChange: () => {}
  }

  const WrapperElement = () => {
    const [selected, setSelected] = useState({
      label: 'not-selected',
      value: 'not-selected'
    })
    return (
      <>
        <span data-testid='notification-1'>{selected.label}</span>
        <DropDown
          value={selected.value}
          options={propValues.options}
          title={propValues.title}
          name={propValues.name}
          onChange={setSelected}
          isDisabled={propValues.isDisabled}
        />
      </>
    )
  }

  test('Should Call onChange function When Active', async () => {
    const user = userEvent.setup()
    render(<WrapperElement />);
    const SelectElement = screen.getByTestId('dropdown-select-1');
    await user.click(SelectElement)
    const OptionElements = screen.getAllByTestId('dropdown-option-1');
    expect(OptionElements.length).toEqual(2)
    await user.click(OptionElements[1])
    const NotificationElement1 = screen.getByTestId('notification-1');
    expect(NotificationElement1).toHaveTextContent(propValues.options[1].label)
  })

  test('Should Not Call onChange function When Disabled', async () => {
    const user = userEvent.setup()
    propValues.isDisabled = true;

    render(<WrapperElement />);
    const SelectElement = screen.getByTestId('dropdown-select-1');
    await user.click(SelectElement)
    const OptionElements = screen.getAllByTestId('dropdown-option-1');
    expect(OptionElements.length).toEqual(2)
    await user.click(OptionElements[1])
    const NotificationElement1 = screen.getByTestId('notification-1');
    expect(NotificationElement1).not.toHaveTextContent(propValues.options[1].label)
    expect(NotificationElement1).toHaveTextContent('not-selected')
  })
})





