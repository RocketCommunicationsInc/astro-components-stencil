import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/assignment-return.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-assignment-return',
  shadow: false,
})
export class RuxIconAssignmentReturn {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assignment-return`}></use>
      </svg>
    );
  }
}
