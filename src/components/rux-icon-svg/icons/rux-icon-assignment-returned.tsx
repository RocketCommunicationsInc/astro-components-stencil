import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/assignment-returned.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-assignment-returned',
  shadow: false,
})
export class RuxIconAssignmentReturned {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assignment-returned`}></use>
      </svg>
    );
  }
}
