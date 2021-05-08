import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/low-priority.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-low-priority',
  shadow: false,
})
export class RuxIconLowPriority {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#low-priority`}></use>
      </svg>
    );
  }
}
