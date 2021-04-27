import { configure, addParameters, addDecorator } from '@storybook/web-components';
import { addReadme } from 'storybook-readme/html';

addDecorator(addReadme);

const loader = require('../loader/index.cjs.js');
const local_stories = require.context('../src', true, /\/[^/ ]+?\/.+\/.+\.stories\.tsx$/);

const loadStories = () => {
  loader.defineCustomElements(window);
  local_stories.keys().forEach(filename => local_stories(filename));
};

configure(loadStories, module);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
