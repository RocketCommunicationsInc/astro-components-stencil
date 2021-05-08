import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/confirmation-number.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-confirmation-number',
  shadow: false,
})
export class RuxIconConfirmationNumber {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#confirmation-number`}></use>
      </svg>
    );
  }
}
