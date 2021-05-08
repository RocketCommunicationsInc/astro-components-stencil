import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/restore-from-trash.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-restore-from-trash',
  shadow: false,
})
export class RuxIconRestoreFromTrash {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#restore-from-trash`}></use>
      </svg>
    );
  }
}
