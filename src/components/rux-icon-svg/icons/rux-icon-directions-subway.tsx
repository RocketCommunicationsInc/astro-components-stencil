import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions-subway.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions-subway',
  shadow: false,
})
export class RuxIconDirectionsSubway {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions-subway`}></use>
      </svg>
    );
  }
}
