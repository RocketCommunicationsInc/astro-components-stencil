import { Component, Prop, h } from '@stencil/core'
import svgIcon from '../../../icons/router.svg'

/**
     * WARNING: This is an autogenerated component.
     * Do not make any changes to this file or they will be overwritten on build.
     * The template for this file is located in the generate-icons.js util file.
     * /

    /** @internal **/
@Component({
    tag: 'rux-icon-router',
    shadow: false,
    styles:
        'rux-icon-router {display: inline-flex;} .rux-icon {fill: var(--iconDefaultColor);} svg, svg > svg { height: 100%; width: auto;}',
})
export class RuxIconRouter {
    /**
     * The fill color for the icon
     */
    @Prop() color?: string

    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */

    @Prop() size:
        | 'extra-small'
        | 'small'
        | 'normal'
        | 'large'
        | 'auto'
        | string = 'extra-small'

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

        return <div class="rux-icon" style={style} innerHTML={svgIcon}></div>
    }
}
