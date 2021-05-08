import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'rux-icon',
    styleUrl: 'rux-icon.css',
    shadow: true,
})
export class RuxIcon {
    svg: string;

    /**
     * The icon size
     */
    @Prop() size: string;

    /**
    * The icon name
    */
    @Prop() name: string;

    @Prop() viewBox: string = '0 0 24 24';

    render() {
        const SVG = `rux-icon-${this.name}`;

        return (
          <Host>
            <SVG class="icon" size={this.size} viewBox={this.viewBox}></SVG>
          </Host>
        );
    }
}
