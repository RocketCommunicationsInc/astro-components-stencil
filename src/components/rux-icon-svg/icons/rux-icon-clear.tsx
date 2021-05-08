import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/clear.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-clear',
  shadow: false,
})
export class RuxIconClear {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#clear`}></use>
      </svg>
    );
  }
}
