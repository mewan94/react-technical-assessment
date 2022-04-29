import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Form } from './form';
import './../../index.css'

export default {
  title: 'Form/Sample Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {
};