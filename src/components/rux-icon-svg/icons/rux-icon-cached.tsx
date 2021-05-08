import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cached.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cached',
  shadow: false,
})
export class RuxIconCached {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cached`}></use>
      </svg>
    );
  }
}
