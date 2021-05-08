import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/event-busy.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-event-busy',
  shadow: false,
})
export class RuxIconEventBusy {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#event-busy`}></use>
      </svg>
    );
  }
}
