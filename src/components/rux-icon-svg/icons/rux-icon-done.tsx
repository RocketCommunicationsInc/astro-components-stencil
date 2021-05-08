import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/done.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-done',
  shadow: false,
})
export class RuxIconDone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#done`}></use>
      </svg>
    );
  }
}
