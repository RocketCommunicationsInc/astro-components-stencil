import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mms.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mms',
  shadow: false,
})
export class RuxIconMms {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mms`}></use>
      </svg>
    );
  }
}
