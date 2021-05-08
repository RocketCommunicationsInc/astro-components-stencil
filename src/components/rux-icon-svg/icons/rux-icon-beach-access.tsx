import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/beach-access.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-beach-access',
  shadow: false,
})
export class RuxIconBeachAccess {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#beach-access`}></use>
      </svg>
    );
  }
}
