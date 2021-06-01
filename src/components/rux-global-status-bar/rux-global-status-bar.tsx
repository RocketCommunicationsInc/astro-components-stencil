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
  // TODO: validate menuIcon prop to make sure it is a valid library icon
  @Prop() menuIcon?: string = "apps";

  render() {
    return (
      <Host>
        <header>
          <slot name="left-side">
            {/* this icon is a placholder until waffle-menu icon is included in the rux-icon library */}
            <rux-icon icon={`${this.menuIcon}`} size="small" />
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
