import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/contacts.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-contacts',
  shadow: false,
})
export class RuxIconContacts {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#contacts`}></use>
      </svg>
    );
  }
}
