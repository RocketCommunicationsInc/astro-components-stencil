import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/history.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-history',
  shadow: false,
})
export class RuxIconHistory {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#history`}></use>
      </svg>
    );
  }
}
