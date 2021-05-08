import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sync.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sync',
  shadow: false,
})
export class RuxIconSync {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sync`}></use>
      </svg>
    );
  }
}
