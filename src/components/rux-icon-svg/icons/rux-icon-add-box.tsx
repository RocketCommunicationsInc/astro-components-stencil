import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-box.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-box',
  shadow: false,
})
export class RuxIconAddBox {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-box`}></use>
      </svg>
    );
  }
}
