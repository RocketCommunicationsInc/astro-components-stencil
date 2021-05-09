import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/folder-special.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-folder-special',
  shadow: false,
})
export class RuxIconFolderSpecial {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#folder-special`}></use>
      </svg>
    );
  }
}
