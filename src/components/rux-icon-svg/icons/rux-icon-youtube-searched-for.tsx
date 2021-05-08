import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/youtube-searched-for.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-youtube-searched-for',
  shadow: false,
})
export class RuxIconYoutubeSearchedFor {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#youtube-searched-for`}></use>
      </svg>
    );
  }
}
