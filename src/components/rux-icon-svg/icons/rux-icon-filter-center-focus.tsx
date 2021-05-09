import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-center-focus.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-center-focus',
  shadow: false,
})
export class RuxIconFilterCenterFocus {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-center-focus`}></use>
      </svg>
    );
  }
}
