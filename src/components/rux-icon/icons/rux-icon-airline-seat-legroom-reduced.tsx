import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airline-seat-legroom-reduced.svg';

/**
 * WARNING: This is an autogenerated component.
 * Do not make any changes to this file or they will be overwritten on build.
 * The template for this file is located in the generate-icons.js util file.
 * /

/** @internal **/
@Component({
  tag: 'rux-icon-airline-seat-legroom-reduced',
  shadow: false,
})
export class RuxIconAirlineSeatLegroomReduced {
  @Prop() color: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'white';

  @Prop() name: string;

  @Prop() size: 'extra small' | 'small' | 'base' | 'large';

  render() {
    return <div class={`rux-icon--${this.color} rux-icon--${this.size}`}  innerHTML={svgIcon}></div>;
  }
}
