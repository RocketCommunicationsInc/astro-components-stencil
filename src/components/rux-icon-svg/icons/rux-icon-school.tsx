import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/school.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-school',
  shadow: false,
})
export class RuxIconSchool {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#school`}></use>
      </svg>
    );
  }
}
