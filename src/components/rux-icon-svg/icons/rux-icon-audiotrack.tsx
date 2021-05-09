import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/audiotrack.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-audiotrack',
  shadow: false,
})
export class RuxIconAudiotrack {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#audiotrack`}></use>
      </svg>
    );
  }
}
