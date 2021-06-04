import { newSpecPage } from '@stencil/core/testing';
import { RuxGlobalStatusBar } from '../rux-global-status-bar';

describe('rux-global-status-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxGlobalStatusBar],
      html: `<rux-global-status-bar></rux-global-status-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-global-status-bar>
        <mock:shadow-root>
          <header>
            <slot name="left-side"></slot>
            <div class="app-meta" hidden>
              <h1><span class="app-version"></span></h1>
            </div>
            <slot></slot>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
      </rux-global-status-bar>
    `);
  });

  it('renders with app meta', async () => {
    const page = await newSpecPage({
      components: [RuxGlobalStatusBar],
      html: `<rux-global-status-bar app-domain="GRM" app-name="Test App Name" app-version="test v1.0"></rux-global-status-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-global-status-bar app-domain="GRM" app-name="Test App Name" app-version="test v1.0" menu-icon="apps">
        <mock:shadow-root>
          <header>
            <slot name="left-side">
              <rux-icon icon="apps" size="small" style="width: 32px"></rux-icon>
            </slot>
            <slot name="app-meta">
              <div class="app-meta">
                <div class="app-info-wrapper">
                  <h1 class="app-domain">GRM</h1>
                  <h1 class="app-name">TEST APP NAME
                    <span class="app-version">test v1.0</span>
                  </h1>
                </div>
                <div class="temp-app-state">App state</div>
                <div class="temp-user-name">User Name</div>
              </div>
            </slot>
            <slot></slot>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
      </rux-global-status-bar>
    `);
  });

  it('renders with app meta and slotted content', async () => {
    const page = await newSpecPage({
      components: [RuxGlobalStatusBar],
      html: `<rux-global-status-bar app-domain="GRM" app-name="Test App Name" app-version="test v1.0">
                <div>Tab links<div>
                <button slot="right-side">Master on/off</button>
            </rux-global-status-bar>`,
    });
    page.waitForChanges()
    expect(page.root).toEqualHtml(`
      <rux-global-status-bar app-domain="GRM" app-name="Test App Name" app-version="test v1.0" menu-icon="apps">
        <mock:shadow-root>
          <header>
            <slot name="left-side">
              <rux-icon icon="apps" size="small" style="width: 32px"></rux-icon>
            </slot>
            <slot name="app-meta">
              <div class="app-meta">
                <div class="app-info-wrapper">
                  <h1 class="app-domain">GRM</h1>
                  <h1 class="app-name">TEST APP NAME
                    <span class="app-version">test v1.0</span>
                  </h1>
                </div>
                <div class="temp-app-state">App state</div>
                <div class="temp-user-name">User Name</div>
              </div>
            </slot>
            <slot></slot>
            <slot name="right-side"></slot>
          </header>
        </mock:shadow-root>
        <div>Tab links<div>
        <button slot="right-side">Master on/off</button>
      </rux-global-status-bar>
    `);
  });
});
