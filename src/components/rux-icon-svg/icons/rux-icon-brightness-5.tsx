import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-5.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-5',
  shadow: false,
})
export class RuxIconBrightness5 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-5`}></use>
      </svg>
    );
  }
}
