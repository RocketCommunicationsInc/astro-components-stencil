import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wb-auto.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wb-auto',
  shadow: false,
})
export class RuxIconWbAuto {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wb-auto`}></use>
      </svg>
    );
  }
}
