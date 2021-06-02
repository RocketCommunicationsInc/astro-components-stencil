import { Prop, Component, Host, h, Watch } from '@stencil/core';
import { AppName } from '../../common/functional-components/appName'
import { AppVersion } from '../../common/functional-components/appVersion'
import { AppDomain } from '../../common/functional-components/appDomain'
import iconsJSON from '../../stories/rux-icons.json'

//create single flat array of icon names from the rux-icons.json file




@Component({
  tag: 'rux-global-status-bar',
  styleUrl: 'rux-global-status-bar.scss',
  shadow: true,
})
export class RuxGlobalStatusBar {
  @Prop() appName?: string;
  @Prop() appVersion?: string;
  @Prop() appDomain?: string;
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
            {/* this icon is a placholder until waffle-menu icon is included in the rux-icon library */}
            <rux-icon icon={`${this.menuIcon}`} size="small" />
          </slot>
          <slot name="app-meta">
            {/* app=meta div content is fallback component when app-meta slot is unfilled */}
            <div class="app-meta">
              <div class="app-info-wrapper">
                <AppDomain domain={this.appDomain} />
                <AppName name={this.appName.toUpperCase()}>
                  <AppVersion version={this.appVersion} />
                </AppName>
              </div>
              <div class="temp-app-state">App state</div>
              <div class="temp-user-name">User Name</div>
            </div>
          </slot>
        <slot></slot>
        <slot name="right-side"></slot>
      </header>
      </Host>
    );
  }

}
