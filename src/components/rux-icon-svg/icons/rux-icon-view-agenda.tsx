import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/view-agenda.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-view-agenda',
  shadow: false,
})
export class RuxIconViewAgenda {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#view-agenda`}></use>
      </svg>
    );
  }
}
