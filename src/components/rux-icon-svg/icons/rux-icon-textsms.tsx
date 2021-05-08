import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/textsms.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-textsms',
  shadow: false,
})
export class RuxIconTextsms {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#textsms`}></use>
      </svg>
    );
  }
}
