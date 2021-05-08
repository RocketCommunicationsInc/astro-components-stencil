import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-column.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-column',
  shadow: false,
})
export class RuxIconViewColumn {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-column`}></use>
      </svg>
    );
  }
}
