import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fiber-new.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fiber-new',
  shadow: false,
})
export class RuxIconFiberNew {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fiber-new`}></use>
      </svg>
    );
  }
}
