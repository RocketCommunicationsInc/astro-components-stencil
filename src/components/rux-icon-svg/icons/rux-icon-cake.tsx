import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cake.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cake',
  shadow: false,
})
export class RuxIconCake {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cake`}></use>
      </svg>
    );
  }
}
