import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/warning.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-warning',
  shadow: false,
})
export class RuxIconWarning {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#warning`}></use>
      </svg>
    );
  }
}
