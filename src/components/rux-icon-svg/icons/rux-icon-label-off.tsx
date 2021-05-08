import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/label-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-label-off',
  shadow: false,
})
export class RuxIconLabelOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#label-off`}></use>
      </svg>
    );
  }
}
