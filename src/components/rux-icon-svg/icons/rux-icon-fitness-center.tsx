import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fitness-center.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fitness-center',
  shadow: false,
})
export class RuxIconFitnessCenter {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fitness-center`}></use>
      </svg>
    );
  }
}
