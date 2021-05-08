import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-module.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-module',
  shadow: false,
})
export class RuxIconViewModule {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-module`}></use>
      </svg>
    );
  }
}
