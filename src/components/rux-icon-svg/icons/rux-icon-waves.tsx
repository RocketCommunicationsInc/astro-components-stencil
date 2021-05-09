import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/waves.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-waves',
  shadow: false,
})
export class RuxIconWaves {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#waves`}></use>
      </svg>
    );
  }
}
