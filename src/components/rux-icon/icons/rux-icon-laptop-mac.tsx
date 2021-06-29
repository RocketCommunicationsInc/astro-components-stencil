import { Component, Prop, h } from '@stencil/core'
import svgIcon from '../../../icons/laptop-mac.svg'

/**
     * WARNING: This is an autogenerated component.
     * Do not make any changes to this file or they will be overwritten on build.
     * The template for this file is located in the generate-icons.js util file.
     * /

    /** @internal **/
@Component({
    tag: 'rux-icon-laptop-mac',
    shadow: false,
})
export class RuxIconLaptopMac {
    /**
     * The fill color for the icon
     */
    @Prop() color?: string
    /**
     * The size of the icon
     */
    @Prop() size: 'extra-small' | 'small' | 'normal' | 'large' = 'normal'

    render() {
        const style = {
            fill: this.color,
        }
        return (
            <div
                class={`rux-icon--${this.size}`}
                style={style}
                innerHTML={svgIcon}
            ></div>
        )
    }
}
