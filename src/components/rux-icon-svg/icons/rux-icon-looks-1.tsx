import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/looks-1.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-looks-1',
  shadow: false,
})
export class RuxIconLooks1 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#looks-1`}></use>
      </svg>
    );
  }
}
