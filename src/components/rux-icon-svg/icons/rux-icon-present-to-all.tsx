import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/present-to-all.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-present-to-all',
  shadow: false,
})
export class RuxIconPresentToAll {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#present-to-all`}></use>
      </svg>
    );
  }
}
