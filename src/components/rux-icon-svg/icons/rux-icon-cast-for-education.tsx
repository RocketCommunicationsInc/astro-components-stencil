import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/cast-for-education.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-cast-for-education',
  shadow: false,
})
export class RuxIconCastForEducation {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#cast-for-education`}></use>
      </svg>
    );
  }
}
