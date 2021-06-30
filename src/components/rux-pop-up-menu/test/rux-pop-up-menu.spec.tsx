import { newSpecPage } from '@stencil/core/testing';
import { RuxPopUpMenu } from '../rux-pop-up-menu';

describe('rux-pop-up-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxPopUpMenu],
      html: `<button aria-controls="menu">Button</button><rux-pop-up-menu id="menu"></rux-pop-up-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-pop-up-menu aria-hidden="true" id="menu">
        <mock:shadow-root>
          <ul aria-expanded="false" role="menu">
            <slot></slot>
          </ul>
          <slot name="menu-end"></slot>
        </mock:shadow-root>
      </rux-pop-up-menu>
    `);
  })
  // it('attaches itself to a custom anchor element', async () => {
  //   const page = await newSpecPage({
  //     components: [RuxPopUpMenu],
  //     html: `<button aria-controls="menu">Button</button><rux-pop-up-menu id="menu"></rux-pop-up-menu>`,
  //   });
  //   const div = page.doc.createElement('div')
  //   const menu = await page.
  // })
  // it('emits lifecycle events')
  // it('opens and closes the menu with the public methods', async () => {
  //   const div = document.createElement('div')

  //   const page = await newSpecPage({
  //     components: [RuxPopUpMenu],
  //     html: `
  //       <rux-pop-up-menu
  //         anchorEl={div}
  //       >
  //       </rux-pop-up-menu>
  //     `,
  //   });
    // menu.triggerEl = div
    // menu.anchorEl = div
    // expect(await menu.isOpen()).toBe(false)
    // // Open Menu
    // expect(await menu.show()).toBe(true)
    // // try to open again, should return false as it's already open
    // expect(await menu.show()).toBe(false)
  // })
});
