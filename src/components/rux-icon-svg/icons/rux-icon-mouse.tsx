import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mouse.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mouse',
  shadow: false,
})
export class RuxIconMouse {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mouse`}></use>
      </svg>
    );
  }
}
