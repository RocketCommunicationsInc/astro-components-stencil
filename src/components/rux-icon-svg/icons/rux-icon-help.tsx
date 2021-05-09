import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/help.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-help',
  shadow: false,
})
export class RuxIconHelp {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#help`}></use>
      </svg>
    );
  }
}
