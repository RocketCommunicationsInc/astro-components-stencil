import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/tune.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-tune',
  shadow: false,
})
export class RuxIconTune {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#tune`}></use>
      </svg>
    );
  }
}
