import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/picture-in-picture-alt.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-picture-in-picture-alt',
  shadow: false,
})
export class RuxIconPictureInPictureAlt {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#picture-in-picture-alt`}></use>
      </svg>
    );
  }
}
