import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Header from '../../features/header/header';
import './../../index.css'

export default {
  title: 'Comman/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  title: 'Test Title',
};