import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/assignment.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-assignment',
  shadow: false,
})
export class RuxIconAssignment {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assignment`}></use>
      </svg>
    );
  }
}
