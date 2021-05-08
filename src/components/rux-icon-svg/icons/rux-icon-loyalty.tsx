import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/loyalty.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-loyalty',
  shadow: false,
})
export class RuxIconLoyalty {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#loyalty`}></use>
      </svg>
    );
  }
}
