import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/leak-remove.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-leak-remove',
  shadow: false,
})
export class RuxIconLeakRemove {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#leak-remove`}></use>
      </svg>
    );
  }
}
