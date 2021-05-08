import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mood.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mood',
  shadow: false,
})
export class RuxIconMood {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mood`}></use>
      </svg>
    );
  }
}
