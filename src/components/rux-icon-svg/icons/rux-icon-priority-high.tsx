import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/priority-high.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-priority-high',
  shadow: false,
})
export class RuxIconPriorityHigh {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#priority-high`}></use>
      </svg>
    );
  }
}
