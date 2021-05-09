import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/skip-next.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-skip-next',
  shadow: false,
})
export class RuxIconSkipNext {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#skip-next`}></use>
      </svg>
    );
  }
}
