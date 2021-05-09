import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/public.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-public',
  shadow: false,
})
export class RuxIconPublic {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#public`}></use>
      </svg>
    );
  }
}
