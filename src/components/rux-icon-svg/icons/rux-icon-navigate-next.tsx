import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/navigate-next.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-navigate-next',
  shadow: false,
})
export class RuxIconNavigateNext {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#navigate-next`}></use>
      </svg>
    );
  }
}
