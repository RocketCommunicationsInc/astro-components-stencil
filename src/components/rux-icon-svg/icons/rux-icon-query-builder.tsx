import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/query-builder.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-query-builder',
  shadow: false,
})
export class RuxIconQueryBuilder {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#query-builder`}></use>
      </svg>
    );
  }
}
