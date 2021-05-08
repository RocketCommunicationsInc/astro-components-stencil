import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/delete-forever.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-delete-forever',
  shadow: false,
})
export class RuxIconDeleteForever {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#delete-forever`}></use>
      </svg>
    );
  }
}
