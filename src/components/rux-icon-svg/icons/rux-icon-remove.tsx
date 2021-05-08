import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/remove.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-remove',
  shadow: false,
})
export class RuxIconRemove {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#remove`}></use>
      </svg>
    );
  }
}
