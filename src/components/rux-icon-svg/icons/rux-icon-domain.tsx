import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/domain.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-domain',
  shadow: false,
})
export class RuxIconDomain {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#domain`}></use>
      </svg>
    );
  }
}
