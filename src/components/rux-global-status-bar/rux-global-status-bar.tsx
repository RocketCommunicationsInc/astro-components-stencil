import { Prop, Component, Host, h } from '@stencil/core'
import { AppMeta } from './appMeta/appMeta'
import { TagType } from '../../common/commonTypes.module'

const TagColor = {
    tag1: '#00C7CB',
    tag2: '#786DD3',
    tag3: '#A200C1',
    tag4: '#DA5309',
}

@Component({
    tag: 'rux-global-status-bar',
    styleUrl: 'rux-global-status-bar.scss',
    shadow: true,
})
export class RuxGlobalStatusBar {
    /**
     * Declares whether a rux-icon will be shown in the left-side slot
     */
    @Prop({
        attribute: 'include-icon',
    })
    includeIcon: boolean = false
    /**
     * Declares what text will render and whether the app-state component will be shown in the app-meta slot
     */
    @Prop({
        attribute: 'app-state',
    })
    appState?: string = ''
    /**
     * Declares the color of the the app-state component background
     */
    @Prop({
        attribute: 'app-state-color',
    })
    appStateColor?: TagType = 'tag1'
    /**
     * Declares what text will render and whether the username component will be shown in the app-meta slot
     */
    @Prop({
        attribute: 'username',
    })
    username?: string = ''
    /**
     * Sets the domain of the application to be displayed in the app-meta element
     */
    @Prop({
        attribute: 'app-domain',
    })
    appDomain?: string
    /**
     * Sets the name of the application to be displayed in the app-meta element
     */
    @Prop({
        attribute: 'app-name',
    })
    appName?: string
    /**
     * Sets the version of the application to be displayed in the app-meta element
     */
    @Prop({
        attribute: 'app-version',
    })
    appVersion?: string
    /**
     * Sets the icon to be displayed in the default rux-icon component
     */
    @Prop({ attribute: 'menu-icon', mutable: true, reflect: true })
    menuIcon?: string = 'apps'

    render() {
        return (
            <Host>
                <header>
                    <slot name="left-side">
                        {this.includeIcon && (
                            <rux-icon
                                icon={`${this.menuIcon}`}
                                size="small"
                                class={
                                    this.appState || this.username
                                        ? 'shifted-up'
                                        : ''
                                }
                            />
                        )}
                    </slot>

                    <slot name="app-meta">
                        {(this.appDomain ||
                            this.appName ||
                            this.appVersion) && (
                            <AppMeta
                                domain={this.appDomain?.toUpperCase()}
                                name={this.appName?.toUpperCase()}
                                version={this.appVersion}
                            >
                                <div class="app-state-wrapper">
                                    {this.appState && (
                                        <div
                                            class="app-state"
                                            style={{
                                                backgroundColor: `${
                                                    TagColor[
                                                        this.appStateColor!
                                                    ]
                                                }`,
                                            }}
                                        >
                                            {this.appState}
                                        </div>
                                    )}
                                    {this.username && (
                                        <div class="username">
                                            {this.username}
                                        </div>
                                    )}
                                </div>
                            </AppMeta>
                        )}
                    </slot>

                    <div class="slotted-content">
                        <slot></slot>
                    </div>

                    <slot name="right-side"></slot>
                </header>
            </Host>
        )
    }
}
