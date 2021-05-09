import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/grade.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-grade',
  shadow: false,
})
export class RuxIconGrade {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#grade`}></use>
      </svg>
    );
  }
}
