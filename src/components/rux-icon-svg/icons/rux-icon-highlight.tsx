import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/highlight.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-highlight',
  shadow: false,
})
export class RuxIconHighlight {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#highlight`}></use>
      </svg>
    );
  }
}
