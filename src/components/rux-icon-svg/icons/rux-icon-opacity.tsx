import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/opacity.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-opacity',
  shadow: false,
})
export class RuxIconOpacity {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#opacity`}></use>
      </svg>
    );
  }
}
