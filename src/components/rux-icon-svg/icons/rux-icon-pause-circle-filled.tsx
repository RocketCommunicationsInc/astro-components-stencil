import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pause-circle-filled.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pause-circle-filled',
  shadow: false,
})
export class RuxIconPauseCircleFilled {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pause-circle-filled`}></use>
      </svg>
    );
  }
}
