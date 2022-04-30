import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { TextInput } from '../../components/input';
import './../../index.css'

export default {
  title: 'Inputs/Text Input',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const DefaultTextInput = Template.bind({});
DefaultTextInput.args = {
  name: 'name',
  label: 'Full Name',
  id: 'input-1',
  type: 'text',
  isDisabled: false,
  placeholder: 'Please enter your name',
  customClassName: '',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  name: 'email',
  label: 'Email',
  id: 'input-2',
  type: 'email',
  isDisabled: false,
  placeholder: 'Please enter your Email',
  customClassName: '',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  name: 'password',
  label: 'Password',
  id: 'input-2',
  type: 'password',
  isDisabled: false,
  placeholder: 'Please enter your Password',
  customClassName: '',
};