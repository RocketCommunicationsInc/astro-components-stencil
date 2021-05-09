import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tab-unselected.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tab-unselected',
  shadow: false,
})
export class RuxIconTabUnselected {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tab-unselected`}></use>
      </svg>
    );
  }
}
