import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-list.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-list',
  shadow: false,
})
export class RuxIconViewList {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-list`}></use>
      </svg>
    );
  }
}
