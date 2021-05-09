import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/supervised-user-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-supervised-user-circle',
  shadow: false,
})
export class RuxIconSupervisedUserCircle {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#supervised-user-circle`}></use>
      </svg>
    );
  }
}
