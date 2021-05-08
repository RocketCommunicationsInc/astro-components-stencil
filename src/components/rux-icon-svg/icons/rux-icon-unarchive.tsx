import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/unarchive.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-unarchive',
  shadow: false,
})
export class RuxIconUnarchive {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#unarchive`}></use>
      </svg>
    );
  }
}
