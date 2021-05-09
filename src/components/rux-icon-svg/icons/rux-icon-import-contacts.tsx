import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/import-contacts.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-import-contacts',
  shadow: false,
})
export class RuxIconImportContacts {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#import-contacts`}></use>
      </svg>
    );
  }
}
