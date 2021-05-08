import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/brightness-high.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-brightness-high',
  shadow: false,
})
export class RuxIconBrightnessHigh {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#brightness-high`}></use>
      </svg>
    );
  }
}
