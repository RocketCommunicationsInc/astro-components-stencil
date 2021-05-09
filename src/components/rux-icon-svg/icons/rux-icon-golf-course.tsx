import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/golf-course.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-golf-course',
  shadow: false,
})
export class RuxIconGolfCourse {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#golf-course`}></use>
      </svg>
    );
  }
}
