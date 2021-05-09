import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/attachment.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-attachment',
  shadow: false,
})
export class RuxIconAttachment {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#attachment`}></use>
      </svg>
    );
  }
}
