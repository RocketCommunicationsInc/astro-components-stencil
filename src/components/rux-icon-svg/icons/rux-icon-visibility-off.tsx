import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/visibility-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-visibility-off',
  shadow: false,
})
export class RuxIconVisibilityOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#visibility-off`}></use>
      </svg>
    );
  }
}
