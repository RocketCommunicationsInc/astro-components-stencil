import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions-railway.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions-railway',
  shadow: false,
})
export class RuxIconDirectionsRailway {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions-railway`}></use>
      </svg>
    );
  }
}
