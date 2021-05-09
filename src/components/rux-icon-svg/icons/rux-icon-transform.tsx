import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/transform.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-transform',
  shadow: false,
})
export class RuxIconTransform {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#transform`}></use>
      </svg>
    );
  }
}
