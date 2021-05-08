import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/accessible.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-accessible',
  shadow: false,
})
export class RuxIconAccessible {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#accessible`}></use>
      </svg>
    );
  }
}
