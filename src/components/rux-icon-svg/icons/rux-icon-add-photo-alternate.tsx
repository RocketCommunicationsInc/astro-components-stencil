import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-photo-alternate.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-photo-alternate',
  shadow: false,
})
export class RuxIconAddPhotoAlternate {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-photo-alternate`}></use>
      </svg>
    );
  }
}
