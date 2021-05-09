import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sync-disabled.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sync-disabled',
  shadow: false,
})
export class RuxIconSyncDisabled {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sync-disabled`}></use>
      </svg>
    );
  }
}
