import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/delete-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-delete-outline',
  shadow: false,
})
export class RuxIconDeleteOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#delete-outline`}></use>
      </svg>
    );
  }
}
