import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/visibility.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-visibility',
  shadow: false,
})
export class RuxIconVisibility {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#visibility`}></use>
      </svg>
    );
  }
}
