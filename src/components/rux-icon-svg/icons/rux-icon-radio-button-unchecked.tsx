import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/radio-button-unchecked.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-radio-button-unchecked',
  shadow: false,
})
export class RuxIconRadioButtonUnchecked {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#radio-button-unchecked`}></use>
      </svg>
    );
  }
}
