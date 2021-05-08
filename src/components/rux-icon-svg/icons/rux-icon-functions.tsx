import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/functions.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-functions',
  shadow: false,
})
export class RuxIconFunctions {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#functions`}></use>
      </svg>
    );
  }
}
