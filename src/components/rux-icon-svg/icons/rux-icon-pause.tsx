import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pause.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pause',
  shadow: false,
})
export class RuxIconPause {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pause`}></use>
      </svg>
    );
  }
}
