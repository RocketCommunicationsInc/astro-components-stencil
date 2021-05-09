import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/error-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-error-outline',
  shadow: false,
})
export class RuxIconErrorOutline {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#error-outline`}></use>
      </svg>
    );
  }
}
