import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/store-mall-directory.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-store-mall-directory',
  shadow: false,
})
export class RuxIconStoreMallDirectory {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#store-mall-directory`}></use>
      </svg>
    );
  }
}
