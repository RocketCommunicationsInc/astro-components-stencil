import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/share.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-share',
  shadow: false,
})
export class RuxIconShare {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#share`}></use>
      </svg>
    );
  }
}
