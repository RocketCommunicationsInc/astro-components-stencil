import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/supervisor-account.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-supervisor-account',
  shadow: false,
})
export class RuxIconSupervisorAccount {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#supervisor-account`}></use>
      </svg>
    );
  }
}
