import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/edit.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-edit',
  shadow: false,
})
export class RuxIconEdit {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#edit`}></use>
      </svg>
    );
  }
}
