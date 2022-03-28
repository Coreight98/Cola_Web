import { ComponentStory, ComponentMeta } from '@storybook/react';

import BoardCard from './index';

export default {
  title: 'Example/Board',
  component: BoardCard,
} as ComponentMeta<typeof BoardCard>;

const Template: ComponentStory<typeof BoardCard> = (args) => <BoardCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 0,
};
