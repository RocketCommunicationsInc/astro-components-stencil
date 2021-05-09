import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/dehaze.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-dehaze',
  shadow: false,
})
export class RuxIconDehaze {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#dehaze`}></use>
      </svg>
    );
  }
}
