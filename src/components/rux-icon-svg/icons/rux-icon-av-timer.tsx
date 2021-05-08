import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/av-timer.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-av-timer',
  shadow: false,
})
export class RuxIconAvTimer {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#av-timer`}></use>
      </svg>
    );
  }
}
