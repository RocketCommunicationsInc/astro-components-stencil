import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sd-card.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sd-card',
  shadow: false,
})
export class RuxIconSdCard {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sd-card`}></use>
      </svg>
    );
  }
}
