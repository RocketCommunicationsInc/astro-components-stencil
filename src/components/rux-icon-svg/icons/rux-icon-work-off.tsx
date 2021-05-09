import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/work-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-work-off',
  shadow: false,
})
export class RuxIconWorkOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#work-off`}></use>
      </svg>
    );
  }
}
