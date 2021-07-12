import { newSpecPage } from '@stencil/core/testing';
import { RuxSelect } from '../rux-select';

describe('rux-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxSelect],
      html: `<rux-select></rux-select>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-select>
    `);
  });
});
