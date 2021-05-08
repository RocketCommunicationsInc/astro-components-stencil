import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/eject.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-eject',
  shadow: false,
})
export class RuxIconEject {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#eject`}></use>
      </svg>
    );
  }
}
