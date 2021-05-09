import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/rounded-corner.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-rounded-corner',
  shadow: false,
})
export class RuxIconRoundedCorner {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#rounded-corner`}></use>
      </svg>
    );
  }
}
