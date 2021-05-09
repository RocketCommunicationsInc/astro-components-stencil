import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/drag-handle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-drag-handle',
  shadow: false,
})
export class RuxIconDragHandle {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#drag-handle`}></use>
      </svg>
    );
  }
}
