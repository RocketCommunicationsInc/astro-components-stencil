import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/domain-disabled.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-domain-disabled',
  shadow: false,
})
export class RuxIconDomainDisabled {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#domain-disabled`}></use>
      </svg>
    );
  }
}
