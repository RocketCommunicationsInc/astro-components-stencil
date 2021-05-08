import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions-walk.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions-walk',
  shadow: false,
})
export class RuxIconDirectionsWalk {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions-walk`}></use>
      </svg>
    );
  }
}
