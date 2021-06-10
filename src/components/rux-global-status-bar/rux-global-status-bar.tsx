import { Prop, Component, Host, h } from '@stencil/core';
import { AppMeta } from './appMeta/appMeta';

@Component({
  tag: 'rux-global-status-bar',
  styleUrl: 'rux-global-status-bar.scss',
  shadow: true,
})
export class RuxGlobalStatusBar {
    /**
   * Declares whether a rux-icon will be shown in the global status bar
   */
  @Prop() includeIcon?: boolean = false
  /**
   * Declares whether the app-state component will be shown in the app-meta slot
   */
  @Prop() includeAppState?: boolean = true
  /**
   * Declares whether the username component will be shown in the app-meta slot
   */
  @Prop() includeUsername?: boolean = true
  /**
   * Sets the domain of the application to be displayed in the default app-meta element
   */
  @Prop() appDomain?: string;
  /**
   * Sets the name of the application to be displayed in the default app-meta element
   */
  @Prop() appName?: string;
  /**
   * Sets the version of the application to be displayed in the default app-meta element
   */
  @Prop() appVersion?: string;
  /**
   * Sets the icon to be displayed in the default rux-icon component
   */
  @Prop({ mutable: true, reflect: true }) menuIcon?: string = "apps";

  render() {
    return (
      <Host>
        <header>

          <slot name="left-side">
            {this.includeIcon && <rux-icon icon={`${this.menuIcon}`} size="small" class={this.includeAppState || this.includeUsername ? 'shifted-up' : null} />}
          </slot>
          
          <slot name="app-meta">
            {(this.appDomain || this.appName || this.appVersion) &&
              <AppMeta domain={this.appDomain?.toUpperCase()} name={this.appName?.toUpperCase()} version={this.appVersion}>
              {/* TODO: these divs are placeholders until an app state component and username display component are built */}
                <div class="app-state-wrapper">
                  {this.includeAppState && <div class="temp-app-state">App state</div>}
                  {this.includeUsername && <div class="temp-username">Username</div>}
                </div>
              </AppMeta>
            }
          </slot>

          <div class="slotted-content">
            <slot></slot>
          </div>

          <slot name="right-side"></slot>
          
        </header>
      </Host>
    );
  }

}
