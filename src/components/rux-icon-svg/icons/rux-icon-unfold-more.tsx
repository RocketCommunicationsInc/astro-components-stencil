import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/unfold-more.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-unfold-more',
  shadow: false,
})
export class RuxIconUnfoldMore {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#unfold-more`}></use>
      </svg>
    );
  }
}
