import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/more.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-more',
  shadow: false,
})
export class RuxIconMore {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#more`}></use>
      </svg>
    );
  }
}
