import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { RadioBtnGroup } from '../../components/input';
import './../../index.css'

export default {
  title: 'Inputs/Radio Button Group',
  component: RadioBtnGroup,
} as ComponentMeta<typeof RadioBtnGroup>;

const Template: ComponentStory<typeof RadioBtnGroup> = (args) => <RadioBtnGroup {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  title: 'Default Radio Group',
  options: [
    {
      label: 'Please select an option',
      value: ''
    },
    {
      label: '2020',
      value: '2020'
    },
    {
      label: '2021',
      value: '2021'
    },
    {
      label: '2022',
      value: '2022'
    },
    {
      label: '2023',
      value: '2023'
    }
  ],
  name: 'year'
};