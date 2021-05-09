import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-compact.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-compact',
  shadow: false,
})
export class RuxIconViewCompact {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-compact`}></use>
      </svg>
    );
  }
}
