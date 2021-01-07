import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import {Select, SelectPropsType} from './select';

export default {
    title: 'Select',
    component: Select,
    argTypes: {},
} as Meta;

const Template: Story<SelectPropsType> = (args) => <Select {...args} />;

export const SelectWithItems = Template.bind({});
SelectWithItems.args = {
    titles: [
        "Moscow",
        "Kiev",
        "Minsk",
    ]
}

export const SelectWithOutItems = Template.bind({});
SelectWithOutItems.args = {
    titles: []
}