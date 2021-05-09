import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/vibration.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-vibration',
  shadow: false,
})
export class RuxIconVibration {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#vibration`}></use>
      </svg>
    );
  }
}
