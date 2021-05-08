import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/insert-invitation.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-insert-invitation',
  shadow: false,
})
export class RuxIconInsertInvitation {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#insert-invitation`}></use>
      </svg>
    );
  }
}
