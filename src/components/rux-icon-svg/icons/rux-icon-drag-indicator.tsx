import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/drag-indicator.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-drag-indicator',
  shadow: false,
})
export class RuxIconDragIndicator {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#drag-indicator`}></use>
      </svg>
    );
  }
}
