import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/strikethrough-s.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-strikethrough-s',
  shadow: false,
})
export class RuxIconStrikethroughS {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#strikethrough-s`}></use>
      </svg>
    );
  }
}
