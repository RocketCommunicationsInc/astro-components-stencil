import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/burst-mode.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-burst-mode',
  shadow: false,
})
export class RuxIconBurstMode {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#burst-mode`}></use>
      </svg>
    );
  }
}
