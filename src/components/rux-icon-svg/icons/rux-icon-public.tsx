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

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#public`}></use>
      </svg>
    );
  }
}
