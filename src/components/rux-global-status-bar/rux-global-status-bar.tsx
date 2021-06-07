import { Prop, Component, Host, h, Watch } from '@stencil/core';
import { AppName } from '../../common/functional-components/appName';
import { AppVersion } from '../../common/functional-components/appVersion';
import { AppDomain } from '../../common/functional-components/appDomain';
import iconsJSON from '../../stories/rux-icons.json';

@Component({
  tag: 'rux-global-status-bar',
  styleUrl: 'rux-global-status-bar.scss',
  shadow: true,
})
export class RuxGlobalStatusBar {
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
  
  iconList = []

  connectedCallback(){
    this.setIconList()
  }

  @Watch('menuIcon')
  validateMenuIcon(requestedMenuIcon: string, prevMenuIcon: string) {
    if (!this.iconList.includes(requestedMenuIcon)) {
      this.menuIcon = prevMenuIcon;
      throw new Error('icon cannot be found in rux-icon library')
    }
  }
  
  // creates a flattened array of all icon names in rux-icons.json
  setIconList() {
    const iconsObject = iconsJSON.solid
    const iconCategories = (Object.keys(iconsJSON.solid))

    iconCategories.map((category) => {
      const iconsArray = iconsObject[category]
      const flatIconsArray = iconsArray.map((icon) => {
        return icon.icon
      })
      this.iconList.push(...flatIconsArray)
    })
  }

  render() {
    return (
      <Host>
        <header>

          <slot name="left-side">
            <rux-icon icon={`${this.menuIcon}`} size="small" style={{"width": "32px"}}/>
          </slot>

          <slot name="app-meta">
            {/* app=meta div content is fallback component when app-meta slot is unfilled */}
            <div class="app-meta">
              <div class="app-info-wrapper">
                <AppDomain domain={this.appDomain.toUpperCase()} />
                <AppName name={this.appName.toUpperCase()}>
                  <AppVersion version={this.appVersion} />
                </AppName>
              </div>
              {/* these divs are placeholders until an app state component and username display component are built */}
              <div class="temp-app-state">App state</div>
              <div class="temp-user-name">Username</div>
            </div>
          </slot>

          <slot></slot>
          
          <slot name="right-side"></slot>
          
      </header>
      </Host>
    );
  }

}
