import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/equalizer.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-equalizer',
  shadow: false,
})
export class RuxIconEqualizer {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#equalizer`}></use>
      </svg>
    );
  }
}
