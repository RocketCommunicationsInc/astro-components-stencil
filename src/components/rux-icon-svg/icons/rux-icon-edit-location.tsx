import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/edit-location.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-edit-location',
  shadow: false,
})
export class RuxIconEditLocation {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#edit-location`}></use>
      </svg>
    );
  }
}
