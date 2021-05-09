import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/person-add-disabled.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-person-add-disabled',
  shadow: false,
})
export class RuxIconPersonAddDisabled {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#person-add-disabled`}></use>
      </svg>
    );
  }
}
