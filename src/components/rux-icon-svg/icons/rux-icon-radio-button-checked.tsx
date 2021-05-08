import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/radio-button-checked.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-radio-button-checked',
  shadow: false,
})
export class RuxIconRadioButtonChecked {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#radio-button-checked`}></use>
      </svg>
    );
  }
}
