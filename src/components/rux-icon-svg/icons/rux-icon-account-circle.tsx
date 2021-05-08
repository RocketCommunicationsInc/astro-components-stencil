import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/account-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-account-circle',
  shadow: false,
})
export class RuxIconAccountCircle {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#account-circle`}></use>
      </svg>
    );
  }
}
