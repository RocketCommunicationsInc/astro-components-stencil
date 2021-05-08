import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/link.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-link',
  shadow: false,
})
export class RuxIconLink {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#link`}></use>
      </svg>
    );
  }
}
