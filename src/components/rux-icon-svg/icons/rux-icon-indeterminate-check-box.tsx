import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/indeterminate-check-box.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-indeterminate-check-box',
  shadow: false,
})
export class RuxIconIndeterminateCheckBox {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#indeterminate-check-box`}></use>
      </svg>
    );
  }
}
