import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/remove-circle-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-remove-circle-outline',
  shadow: false,
})
export class RuxIconRemoveCircleOutline {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#remove-circle-outline`}></use>
      </svg>
    );
  }
}
