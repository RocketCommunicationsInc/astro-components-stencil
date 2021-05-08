import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/ballot.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-ballot',
  shadow: false,
})
export class RuxIconBallot {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#ballot`}></use>
      </svg>
    );
  }
}
