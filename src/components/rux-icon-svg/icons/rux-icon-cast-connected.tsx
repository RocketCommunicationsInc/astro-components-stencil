import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cast-connected.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cast-connected',
  shadow: false,
})
export class RuxIconCastConnected {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cast-connected`}></use>
      </svg>
    );
  }
}
