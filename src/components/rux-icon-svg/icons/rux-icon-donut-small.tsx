import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/donut-small.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-donut-small',
  shadow: false,
})
export class RuxIconDonutSmall {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#donut-small`}></use>
      </svg>
    );
  }
}
