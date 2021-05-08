import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/accessibility.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-accessibility',
  shadow: false,
})
export class RuxIconAccessibility {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#accessibility`}></use>
      </svg>
    );
  }
}
