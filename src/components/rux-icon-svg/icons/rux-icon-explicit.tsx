import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/explicit.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-explicit',
  shadow: false,
})
export class RuxIconExplicit {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#explicit`}></use>
      </svg>
    );
  }
}
