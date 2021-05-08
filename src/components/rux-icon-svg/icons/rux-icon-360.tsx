import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/360.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-360',
  shadow: false,
})
export class RuxIcon360 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#360`}></use>
      </svg>
    );
  }
}
