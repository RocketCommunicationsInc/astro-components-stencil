import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/live-help.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-live-help',
  shadow: false,
})
export class RuxIconLiveHelp {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#live-help`}></use>
      </svg>
    );
  }
}
