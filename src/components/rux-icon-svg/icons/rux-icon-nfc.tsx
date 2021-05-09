import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/nfc.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-nfc',
  shadow: false,
})
export class RuxIconNfc {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#nfc`}></use>
      </svg>
    );
  }
}
