import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-stream.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-stream',
  shadow: false,
})
export class RuxIconViewStream {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-stream`}></use>
      </svg>
    );
  }
}
