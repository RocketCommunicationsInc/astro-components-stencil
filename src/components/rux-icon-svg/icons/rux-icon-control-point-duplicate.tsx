import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/control-point-duplicate.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-control-point-duplicate',
  shadow: false,
})
export class RuxIconControlPointDuplicate {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#control-point-duplicate`}></use>
      </svg>
    );
  }
}
