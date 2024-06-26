import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotFoundPage as NotFoundPageReference } from './NotFoundPage';

export default {
	title: 'pages/NotFoundPage',
	component: NotFoundPageReference,
} as ComponentMeta<typeof NotFoundPageReference>;

const Template: ComponentStory<typeof NotFoundPageReference> = () => (
	<NotFoundPageReference />
);

export const NotFoundPage = Template.bind({});
