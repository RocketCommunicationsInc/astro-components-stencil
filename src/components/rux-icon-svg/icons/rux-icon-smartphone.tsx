import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/smartphone.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-smartphone',
  shadow: false,
})
export class RuxIconSmartphone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#smartphone`}></use>
      </svg>
    );
  }
}
