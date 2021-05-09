import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/train.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-train',
  shadow: false,
})
export class RuxIconTrain {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#train`}></use>
      </svg>
    );
  }
}
