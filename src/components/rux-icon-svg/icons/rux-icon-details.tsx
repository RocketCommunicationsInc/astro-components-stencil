import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/details.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-details',
  shadow: false,
})
export class RuxIconDetails {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#details`}></use>
      </svg>
    );
  }
}
