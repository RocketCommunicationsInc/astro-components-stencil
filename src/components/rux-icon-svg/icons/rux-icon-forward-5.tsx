import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/forward-5.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-forward-5',
  shadow: false,
})
export class RuxIconForward5 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#forward-5`}></use>
      </svg>
    );
  }
}
