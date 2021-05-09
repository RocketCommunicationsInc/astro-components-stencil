import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/turned-in.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-turned-in',
  shadow: false,
})
export class RuxIconTurnedIn {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#turned-in`}></use>
      </svg>
    );
  }
}
