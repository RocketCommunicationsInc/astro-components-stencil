import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/weekend.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-weekend',
  shadow: false,
})
export class RuxIconWeekend {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#weekend`}></use>
      </svg>
    );
  }
}
