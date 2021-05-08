import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/folder.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-folder',
  shadow: false,
})
export class RuxIconFolder {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#folder`}></use>
      </svg>
    );
  }
}
