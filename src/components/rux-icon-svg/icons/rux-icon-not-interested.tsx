import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/not-interested.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-not-interested',
  shadow: false,
})
export class RuxIconNotInterested {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#not-interested`}></use>
      </svg>
    );
  }
}
