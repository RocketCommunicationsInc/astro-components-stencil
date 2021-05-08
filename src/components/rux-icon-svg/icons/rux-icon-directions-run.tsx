import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/directions-run.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-directions-run',
  shadow: false,
})
export class RuxIconDirectionsRun {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#directions-run`}></use>
      </svg>
    );
  }
}
