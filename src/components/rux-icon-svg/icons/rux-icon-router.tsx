import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/router.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-router',
  shadow: false,
})
export class RuxIconRouter {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#router`}></use>
      </svg>
    );
  }
}
