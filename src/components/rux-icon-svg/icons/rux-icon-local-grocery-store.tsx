import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-grocery-store.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-grocery-store',
  shadow: false,
})
export class RuxIconLocalGroceryStore {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-grocery-store`}></use>
      </svg>
    );
  }
}
