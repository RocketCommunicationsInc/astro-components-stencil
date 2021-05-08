import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/toggle-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-toggle-off',
  shadow: false,
})
export class RuxIconToggleOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#toggle-off`}></use>
      </svg>
    );
  }
}
