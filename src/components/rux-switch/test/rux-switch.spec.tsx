import { newSpecPage } from '@stencil/core/testing';
import { RuxSwitch } from '../rux-switch';

describe('rux-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxSwitch],
      html: `<rux-switch></rux-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-switch>
    `);
  });
});
