import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-7.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-7',
  shadow: false,
})
export class RuxIconBrightness7 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-7`}></use>
      </svg>
    );
  }
}
