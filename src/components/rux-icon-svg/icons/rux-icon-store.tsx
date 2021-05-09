import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/store.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-store',
  shadow: false,
})
export class RuxIconStore {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#store`}></use>
      </svg>
    );
  }
}
