import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-shipping.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-shipping',
  shadow: false,
})
export class RuxIconLocalShipping {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-shipping`}></use>
      </svg>
    );
  }
}
