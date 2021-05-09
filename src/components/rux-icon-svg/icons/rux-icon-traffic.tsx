import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/traffic.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-traffic',
  shadow: false,
})
export class RuxIconTraffic {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#traffic`}></use>
      </svg>
    );
  }
}
