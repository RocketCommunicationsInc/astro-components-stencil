import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-circle-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-circle-outline',
  shadow: false,
})
export class RuxIconAddCircleOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-circle-outline`}></use>
      </svg>
    );
  }
}
