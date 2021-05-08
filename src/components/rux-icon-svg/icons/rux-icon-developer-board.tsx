import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/developer-board.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-developer-board',
  shadow: false,
})
export class RuxIconDeveloperBoard {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#developer-board`}></use>
      </svg>
    );
  }
}
