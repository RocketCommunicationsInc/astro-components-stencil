import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/replay-30.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-replay-30',
  shadow: false,
})
export class RuxIconReplay30 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#replay-30`}></use>
      </svg>
    );
  }
}
