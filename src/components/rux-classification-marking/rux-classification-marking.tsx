import { Component, Host, Prop, h } from '@stencil/core'
import { Classification } from '../../common/commonTypes.module'
@Component({
    tag: 'rux-classification-marking',
    styleUrl: 'rux-classification-marking.scss',
    shadow: true,
})
export class RuxClassificationMarking {
    /**
     * Defines which classification marking will be displayed.
     */
    @Prop() classification: Classification = 'unclassified'
    /**
     * Allows additional text labels to be added to the a marking
     */
    @Prop() label?: string
    /**
     * Declares the marking as a `tag` rather than the default banner style
     */
    @Prop({ reflect: true }) tag: boolean = false

    /**
     * Sets whether to include a footer banner. Footer banner will only show if tag is false.
     */
    @Prop({ attribute: 'footer-banner' }) footerBanner?: boolean

    get type(): 'tag' | 'banner' {
        return this.tag ? 'tag' : 'banner'
    }

    _getDisplayData() {
        const markings = {
            banner: {
                controlled: 'cui',
                confidential: 'confidential',
                secret: 'secret',
                'top-secret': 'top secret',
                'top-secret-sci': 'top secret//sci',
                unclassified: 'unclassified',
            },
            tag: {
                controlled: 'cui',
                confidential: 'c',
                secret: 's',
                'top-secret': 'ts',
                'top-secret-sci': 'TS//SCI',
                unclassified: 'u',
            },
        }

        const text = markings[this.type][this.classification]
        if (!text) {
            return 'Select a Classification Marking'
        }
        return text
    }

    render() {
        if (this.footerBanner && !this.tag) {
            return (
                <Host>
                    <div>
                        {this._getDisplayData()}
                        {this.label}
                    </div>
                    <slot></slot>
                    <div class="footer-banner">
                        {this._getDisplayData()}
                        {this.label}
                    </div>
                </Host>
            )
        } else {
            return (
                <Host>
                    <div>
                        {this._getDisplayData()}
                        {this.label}
                    </div>
                    <slot></slot>
                </Host>
            )
        }
    }
}
