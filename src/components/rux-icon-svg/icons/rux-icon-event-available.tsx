import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/event-available.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-event-available',
  shadow: false,
})
export class RuxIconEventAvailable {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#event-available`}></use>
      </svg>
    );
  }
}
