import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/assignment-find.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-assignment-find',
  shadow: false,
})
export class RuxIconAssignmentFind {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assignment-find`}></use>
      </svg>
    );
  }
}
