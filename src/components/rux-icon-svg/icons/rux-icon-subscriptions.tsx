import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/subscriptions.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-subscriptions',
  shadow: false,
})
export class RuxIconSubscriptions {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#subscriptions`}></use>
      </svg>
    );
  }
}
