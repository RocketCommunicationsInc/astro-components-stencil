import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/replay.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-replay',
  shadow: false,
})
export class RuxIconReplay {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#replay`}></use>
      </svg>
    );
  }
}
