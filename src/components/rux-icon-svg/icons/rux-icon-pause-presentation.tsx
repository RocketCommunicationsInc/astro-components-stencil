import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pause-presentation.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pause-presentation',
  shadow: false,
})
export class RuxIconPausePresentation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pause-presentation`}></use>
      </svg>
    );
  }
}
