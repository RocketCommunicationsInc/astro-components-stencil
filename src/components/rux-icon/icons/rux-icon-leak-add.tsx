import { Component, Prop, h } from '@stencil/core'
import svgIcon from '../../../icons/leak-add.svg'

/**
     * WARNING: This is an autogenerated component.
     * Do not make any changes to this file or they will be overwritten on build.
     * The template for this file is located in the generate-icons.js util file.
     * /

    /** @internal **/
@Component({
    tag: 'rux-icon-leak-add',
    shadow: false,
})
export class RuxIconLeakAdd {
    /**
     * The fill color for the icon
     */
    @Prop() color?: string

    /**
     * The size of the icon
     */

    @Prop() size: 'extra-small' | 'small' | 'normal' | 'large' | string =
        'normal'

    get iconSize() {
        const sizes: { [key: string]: any } = {
            'extra-small': '1rem',
            small: '2rem',
            normal: '3rem',
            large: '4rem',
        }

        if (sizes[this.size]) {
            return sizes[this.size]
        } else {
            return this.size
        }
    }
    render() {
        const style = {
            fill: this.color,
            height: this.iconSize,
            width: this.iconSize,
        }

        return <div style={style} innerHTML={svgIcon}></div>
    }
}
