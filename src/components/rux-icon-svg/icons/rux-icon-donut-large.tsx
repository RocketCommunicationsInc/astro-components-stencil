import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/donut-large.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-donut-large',
  shadow: false,
})
export class RuxIconDonutLarge {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#donut-large`}></use>
      </svg>
    );
  }
}
