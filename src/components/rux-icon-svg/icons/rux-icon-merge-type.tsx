import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/merge-type.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-merge-type',
  shadow: false,
})
export class RuxIconMergeType {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#merge-type`}></use>
      </svg>
    );
  }
}
