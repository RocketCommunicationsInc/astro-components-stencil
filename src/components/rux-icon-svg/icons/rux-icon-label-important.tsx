import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/label-important.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-label-important',
  shadow: false,
})
export class RuxIconLabelImportant {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#label-important`}></use>
      </svg>
    );
  }
}
