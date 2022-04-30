import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { MobileNoInput } from '../../components/input';
import './../../index.css'

export default {
  title: 'Inputs/Mobile No Input',
  component: MobileNoInput,
} as ComponentMeta<typeof MobileNoInput>;

const Template: ComponentStory<typeof MobileNoInput> = (args) => <MobileNoInput {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  name: 'monileNo',
  label: 'Mobile No',
  value:'',
  id: 'input-1',
  type: 'text',
  isDisabled: false,
  placeholder: '+(00) 1234-123 1234',
  customClassName: '',
};