import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/score.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-score',
  shadow: false,
})
export class RuxIconScore {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#score`}></use>
      </svg>
    );
  }
}
