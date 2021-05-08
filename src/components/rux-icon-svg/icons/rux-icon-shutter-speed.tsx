import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/shutter-speed.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-shutter-speed',
  shadow: false,
})
export class RuxIconShutterSpeed {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#shutter-speed`}></use>
      </svg>
    );
  }
}
