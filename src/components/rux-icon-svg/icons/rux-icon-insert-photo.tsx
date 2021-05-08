import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/insert-photo.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-insert-photo',
  shadow: false,
})
export class RuxIconInsertPhoto {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#insert-photo`}></use>
      </svg>
    );
  }
}
