import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/linear-scale.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-linear-scale',
  shadow: false,
})
export class RuxIconLinearScale {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#linear-scale`}></use>
      </svg>
    );
  }
}
