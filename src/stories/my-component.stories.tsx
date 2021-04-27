import readme from '../components/my-component/readme.md';
// lit-html is needed here to render the docs page for the component
import { html } from 'lit-html';

export default {
  title: 'Components/My Component',
  component: 'my-component',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
  argTypes: {
    first: { control: 'text' },
    middle: { control: 'text' },
    last: { control: 'text' },
  },
};

export const Default = ({ first, middle, last }) => {
  return html`<my-component first="${first}" middle="${middle}" last="${last}"></my-component>`;
};

Default.args = {
  first: 'Millie',
  middle: 'Bobby',
  last: 'Brown',
};
