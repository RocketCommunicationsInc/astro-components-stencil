import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mic-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mic-off',
  shadow: false,
})
export class RuxIconMicOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mic-off`}></use>
      </svg>
    );
  }
}
