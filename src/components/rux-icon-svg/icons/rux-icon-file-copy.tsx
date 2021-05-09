import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/file-copy.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-file-copy',
  shadow: false,
})
export class RuxIconFileCopy {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#file-copy`}></use>
      </svg>
    );
  }
}
