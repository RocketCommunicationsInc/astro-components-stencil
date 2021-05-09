import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/nature-people.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-nature-people',
  shadow: false,
})
export class RuxIconNaturePeople {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#nature-people`}></use>
      </svg>
    );
  }
}
