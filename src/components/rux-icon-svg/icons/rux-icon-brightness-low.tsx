import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-low.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-low',
  shadow: false,
})
export class RuxIconBrightnessLow {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-low`}></use>
      </svg>
    );
  }
}
