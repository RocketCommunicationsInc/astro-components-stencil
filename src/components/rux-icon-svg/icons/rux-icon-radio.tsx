import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/radio.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-radio',
  shadow: false,
})
export class RuxIconRadio {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#radio`}></use>
      </svg>
    );
  }
}
