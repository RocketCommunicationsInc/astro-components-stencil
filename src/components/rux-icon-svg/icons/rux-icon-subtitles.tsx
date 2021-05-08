import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/subtitles.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-subtitles',
  shadow: false,
})
export class RuxIconSubtitles {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#subtitles`}></use>
      </svg>
    );
  }
}
