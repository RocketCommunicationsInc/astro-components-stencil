import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tag-faces.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tag-faces',
  shadow: false,
})
export class RuxIconTagFaces {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tag-faces`}></use>
      </svg>
    );
  }
}
