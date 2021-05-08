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

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#history`}></use>
      </svg>
    );
  }
}
