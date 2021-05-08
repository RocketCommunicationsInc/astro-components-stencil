import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/open-in-new.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-open-in-new',
  shadow: false,
})
export class RuxIconOpenInNew {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#open-in-new`}></use>
      </svg>
    );
  }
}
