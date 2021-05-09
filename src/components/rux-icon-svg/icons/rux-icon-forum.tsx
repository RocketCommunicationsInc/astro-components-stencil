import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/forum.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-forum',
  shadow: false,
})
export class RuxIconForum {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#forum`}></use>
      </svg>
    );
  }
}
