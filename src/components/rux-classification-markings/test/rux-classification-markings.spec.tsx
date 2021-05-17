import { newSpecPage } from '@stencil/core/testing';
import { RuxClassificationMarkings } from '../rux-classification-markings';

describe('rux-classification-markings', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxClassificationMarkings],
      html: `<rux-classification-markings></rux-classification-markings>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-classification-markings>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-classification-markings>
    `);
  });
});
