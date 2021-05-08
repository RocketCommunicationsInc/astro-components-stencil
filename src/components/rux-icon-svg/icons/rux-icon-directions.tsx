import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions',
  shadow: false,
})
export class RuxIconDirections {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions`}></use>
      </svg>
    );
  }
}
