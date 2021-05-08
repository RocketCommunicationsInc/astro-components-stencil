import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-location.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-location',
  shadow: false,
})
export class RuxIconAddLocation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-location`}></use>
      </svg>
    );
  }
}
