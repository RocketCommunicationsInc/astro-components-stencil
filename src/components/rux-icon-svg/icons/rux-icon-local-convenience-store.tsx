import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-convenience-store.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-convenience-store',
  shadow: false,
})
export class RuxIconLocalConvenienceStore {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-convenience-store`}></use>
      </svg>
    );
  }
}
