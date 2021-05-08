import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/timelapse.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-timelapse',
  shadow: false,
})
export class RuxIconTimelapse {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#timelapse`}></use>
      </svg>
    );
  }
}
