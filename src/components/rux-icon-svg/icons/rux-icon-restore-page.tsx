import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/restore-page.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-restore-page',
  shadow: false,
})
export class RuxIconRestorePage {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#restore-page`}></use>
      </svg>
    );
  }
}
