import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/looks-2.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-looks-2',
  shadow: false,
})
export class RuxIconLooks2 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#looks-2`}></use>
      </svg>
    );
  }
}
