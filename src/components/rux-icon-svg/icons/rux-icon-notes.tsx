import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/notes.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-notes',
  shadow: false,
})
export class RuxIconNotes {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#notes`}></use>
      </svg>
    );
  }
}
