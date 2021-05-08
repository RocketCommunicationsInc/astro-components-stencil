import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flash-on.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flash-on',
  shadow: false,
})
export class RuxIconFlashOn {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flash-on`}></use>
      </svg>
    );
  }
}
