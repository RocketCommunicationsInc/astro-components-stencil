import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/system-update.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-system-update',
  shadow: false,
})
export class RuxIconSystemUpdate {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#system-update`}></use>
      </svg>
    );
  }
}
