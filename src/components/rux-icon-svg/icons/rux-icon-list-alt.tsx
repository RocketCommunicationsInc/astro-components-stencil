import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/list-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-list-alt',
  shadow: false,
})
export class RuxIconListAlt {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#list-alt`}></use>
      </svg>
    );
  }
}
