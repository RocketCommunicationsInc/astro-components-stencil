import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/monetization-on.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-monetization-on',
  shadow: false,
})
export class RuxIconMonetizationOn {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#monetization-on`}></use>
      </svg>
    );
  }
}
