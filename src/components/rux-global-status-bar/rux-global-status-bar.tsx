import { Prop, Component, Host, h } from '@stencil/core';
import { AppName } from '../../common/functional-components/appName'
import { AppVersion } from '../../common/functional-components/appVersion'
import { AppDomain } from '../../common/functional-components/appDomain'

@Component({
  tag: 'rux-global-status-bar',
  styleUrl: 'rux-global-status-bar.scss',
  shadow: true,
})
export class RuxGlobalStatusBar {
  @Prop() appName?: string;
  @Prop() appVersion?: string;
  @Prop() appDomain?: string;

  render() {
    return (
      <Host>
        <header>
          <slot name="left-side">
            <rux-icon icon="apps" size="small" />
          </slot>
          <slot name="app-meta">
            {/* app=meta div content is fallback component when app-meta slot is unfilled */}
            <div class="app-meta">
              <AppDomain domain={this.appDomain} /><AppName name={this.appName.toUpperCase()}><AppVersion version={this.appVersion} /></ AppName>
            </div>
          </slot>
        <slot></slot>
        <slot name="right-side"></slot>
      </header>
      </Host>
    );
  }

}
