import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/picture-as-pdf.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-picture-as-pdf',
  shadow: false,
})
export class RuxIconPictureAsPdf {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#picture-as-pdf`}></use>
      </svg>
    );
  }
}
