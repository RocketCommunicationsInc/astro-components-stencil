import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/note-add.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-note-add',
  shadow: false,
})
export class RuxIconNoteAdd {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#note-add`}></use>
      </svg>
    );
  }
}
