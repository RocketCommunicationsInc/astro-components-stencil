import { html, render } from 'lit-html'
import { text, withKnobs } from '@storybook/addon-knobs'

//@ts-ignore
import readme from '../components/rux-global-status-bar/readme.md'

export default {
    title: 'Components/Global Status Bar',
    decorators: [withKnobs],
    parameters: {
        readme: {
            sidebar: readme,
        },
    },
}

export const GlobalStatusBar = () => {
  const appDomainKnob = text ('App Domain', 'GRM');
  const appNameKnob = text('App Name', 'Dashboard');
  const appVersionKnob = text('Version', '4.0 alpha');
  const menuIconKnob = text('Menu Icon', 'apps');


  return html`
    <div style="display: flex; justify-content: center;">
      <rux-global-status-bar .appDomain="${appDomainKnob}" .appName="${appNameKnob}" .appVersion="${appVersionKnob}" .menuIcon="${menuIconKnob}"></rux-global-status-bar>
    </div>
  `;
};

GlobalStatusBar.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: readme,
    },
}

export const GlobalStatusBarWithSlotContent = () => {
  const appDomainKnob = text ('App Domain', 'GRM');
  const appNameKnob = text('App Name', 'Dashboard');
  const appVersionKnob = text('Version', '4.0 alpha');
  const menuIconKnob = text('Menu Icon', 'apps');

  return html`
    <div style="display: flex; justify-content: center;">
      <rux-global-status-bar class="dark-theme" .appDomain="${appDomainKnob}" .appName="${appNameKnob}" .appVersion="${appVersionKnob}" .menuIcon="${menuIconKnob}">
        <rux-clock></rux-clock>
        <rux-button slot="right-side" >Master off</rux-button>
      </rux-global-status-bar>
    </div>
  `;
};

GlobalStatusBarWithSlotContent.storyName = 'Global Status Bar with Slot Content'

GlobalStatusBarWithSlotContent.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: readme,
    },
}

export const GlobalStatusBarWithTabs = () => {
    const appnameKnob = text('App Name', 'Astro Global Status Bar')
    const versionKnob = text('Version', '4.0 alpha')

    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-global-status-bar
                class="dark-theme"
                .appname="${appnameKnob}"
                .version="${versionKnob}"
            >
                <rux-tabs id="tab-set-id-1">
                    <rux-tab id="tab-id-1-1">Tab 1</rux-tab>
                    <rux-tab id="tab-id-1-2">Tab 2</rux-tab>
                    <rux-tab id="tab-id-1-3">Tab 3</rux-tab>
                </rux-tabs>
                <rux-button>Master off</rux-button>
            </rux-global-status-bar>
            <rux-tab-panels aria-labelledby="tab-set-id-1">
                <rux-tab-panel aria-labelledby="tab-id-1-1">
                    <pre
                        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"
                    ><<span>!-- Tab 1 HTML content --</span>></pre>
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-1-2">
                    <pre
                        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"
                    ><<span>!-- Tab 2 HTML content --</span>></pre>
                </rux-tab-panel>
                <rux-tab-panel aria-labelledby="tab-id-1-3">
                    <pre
                        style="padding: 1vw; border: rgba(255,255,255, .15) dashed 1px; margin: 0;"
                    ><<span>!-- Tab 3 HTML content --</span>></pre>
                </rux-tab-panel>
            </rux-tab-panels>
        </div>
    `
}

GlobalStatusBarWithTabs.storyName = 'Global Status Bar with Tabs'

GlobalStatusBarWithTabs.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: readme,
    },
}
