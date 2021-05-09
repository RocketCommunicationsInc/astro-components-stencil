import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/picture-in-picture.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-picture-in-picture',
  shadow: false,
})
export class RuxIconPictureInPicture {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#picture-in-picture`}></use>
      </svg>
    );
  }
}
