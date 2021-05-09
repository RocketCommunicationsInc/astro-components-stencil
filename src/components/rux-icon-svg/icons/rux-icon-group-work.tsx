import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/group-work.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-group-work',
  shadow: false,
})
export class RuxIconGroupWork {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#group-work`}></use>
      </svg>
    );
  }
}
