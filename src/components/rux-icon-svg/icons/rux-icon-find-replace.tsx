import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/find-replace.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-find-replace',
  shadow: false,
})
export class RuxIconFindReplace {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#find-replace`}></use>
      </svg>
    );
  }
}
