import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/child-friendly.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-child-friendly',
  shadow: false,
})
export class RuxIconChildFriendly {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#child-friendly`}></use>
      </svg>
    );
  }
}
