import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/publish.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-publish',
  shadow: false,
})
export class RuxIconPublish {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#publish`}></use>
      </svg>
    );
  }
}
