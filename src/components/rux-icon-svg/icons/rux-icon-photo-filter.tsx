import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/photo-filter.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-photo-filter',
  shadow: false,
})
export class RuxIconPhotoFilter {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#photo-filter`}></use>
      </svg>
    );
  }
}
