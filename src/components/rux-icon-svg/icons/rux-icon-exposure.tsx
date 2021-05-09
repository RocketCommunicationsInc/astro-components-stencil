import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/exposure.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-exposure',
  shadow: false,
})
export class RuxIconExposure {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#exposure`}></use>
      </svg>
    );
  }
}
