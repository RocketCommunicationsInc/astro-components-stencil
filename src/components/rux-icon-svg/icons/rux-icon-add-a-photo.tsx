import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-a-photo.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-a-photo',
  shadow: false,
})
export class RuxIconAddAPhoto {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-a-photo`}></use>
      </svg>
    );
  }
}
