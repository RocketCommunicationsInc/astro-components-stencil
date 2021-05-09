import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fullscreen.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fullscreen',
  shadow: false,
})
export class RuxIconFullscreen {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fullscreen`}></use>
      </svg>
    );
  }
}
