import { ComponentStory, ComponentMeta } from '@storybook/react';

import HashtagChip from './index';

export default {
  title: 'Example/HashtagChip',
  component: HashtagChip,
} as ComponentMeta<typeof HashtagChip>;

const Template: ComponentStory<typeof HashtagChip> = (args) => <HashtagChip {...args} />;

export const Small = Template.bind({});
Small.args = {
  title: '버튼',
  size: 'small',
};

export const Full = Template.bind({});
Full.args = {
  title: '버튼',
  size: 'full',
};
