import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-2.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-2',
  shadow: false,
})
export class RuxIconBrightness2 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-2`}></use>
      </svg>
    );
  }
}
