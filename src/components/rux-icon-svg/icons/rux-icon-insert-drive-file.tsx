import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/insert-drive-file.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-insert-drive-file',
  shadow: false,
})
export class RuxIconInsertDriveFile {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#insert-drive-file`}></use>
      </svg>
    );
  }
}
