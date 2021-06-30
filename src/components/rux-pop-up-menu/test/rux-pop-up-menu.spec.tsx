import { newSpecPage } from '@stencil/core/testing';
import { RuxPopUpMenu } from '../rux-pop-up-menu';

describe('rux-pop-up-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxPopUpMenu],
      html: `<rux-pop-up-menu></rux-pop-up-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-pop-up-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-pop-up-menu>
    `);
  })
  it('attaches itself to a custom anchor element', () => {
    const menu = new RuxPopUpMenu()
    const div = document.createElement('div')
    menu.anchorEl = div
    menu.connectedCallback()
    // expect
  })
  it('emits lifecycle events')
  it('opens and closes the menu with the public methods')
});
