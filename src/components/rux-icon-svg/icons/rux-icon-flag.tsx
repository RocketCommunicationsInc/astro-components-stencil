import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flag.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flag',
  shadow: false,
})
export class RuxIconFlag {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flag`}></use>
      </svg>
    );
  }
}
