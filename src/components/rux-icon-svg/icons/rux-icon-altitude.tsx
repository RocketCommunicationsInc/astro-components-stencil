import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/altitude.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-altitude',
  shadow: false,
})
export class RuxIconAltitude {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#altitude`}></use>
      </svg>
    );
  }
}
