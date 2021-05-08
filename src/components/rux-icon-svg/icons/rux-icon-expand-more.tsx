import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/expand-more.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-expand-more',
  shadow: false,
})
export class RuxIconExpandMore {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#expand-more`}></use>
      </svg>
    );
  }
}
