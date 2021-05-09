import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/vertical-align-top.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-vertical-align-top',
  shadow: false,
})
export class RuxIconVerticalAlignTop {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#vertical-align-top`}></use>
      </svg>
    );
  }
}
