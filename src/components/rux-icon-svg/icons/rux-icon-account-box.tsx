import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/account-box.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-account-box',
  shadow: false,
})
export class RuxIconAccountBox {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#account-box`}></use>
      </svg>
    );
  }
}
