import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/headset.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-headset',
  shadow: false,
})
export class RuxIconHeadset {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#headset`}></use>
      </svg>
    );
  }
}
