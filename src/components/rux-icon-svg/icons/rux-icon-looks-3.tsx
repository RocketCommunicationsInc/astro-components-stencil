import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/looks-3.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-looks-3',
  shadow: false,
})
export class RuxIconLooks3 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#looks-3`}></use>
      </svg>
    );
  }
}
