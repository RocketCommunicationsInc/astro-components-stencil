import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/person.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-person',
  shadow: false,
})
export class RuxIconPerson {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#person`}></use>
      </svg>
    );
  }
}
