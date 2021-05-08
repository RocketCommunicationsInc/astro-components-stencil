import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/text-fields.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-text-fields',
  shadow: false,
})
export class RuxIconTextFields {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#text-fields`}></use>
      </svg>
    );
  }
}
