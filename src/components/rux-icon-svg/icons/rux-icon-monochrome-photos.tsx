import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/monochrome-photos.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-monochrome-photos',
  shadow: false,
})
export class RuxIconMonochromePhotos {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#monochrome-photos`}></use>
      </svg>
    );
  }
}
