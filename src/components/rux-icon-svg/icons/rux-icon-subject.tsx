import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/subject.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-subject',
  shadow: false,
})
export class RuxIconSubject {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#subject`}></use>
      </svg>
    );
  }
}
