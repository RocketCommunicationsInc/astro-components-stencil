import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/looks-6.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-looks-6',
  shadow: false,
})
export class RuxIconLooks6 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#looks-6`}></use>
      </svg>
    );
  }
}
