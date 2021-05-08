import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/perm-identity.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-perm-identity',
  shadow: false,
})
export class RuxIconPermIdentity {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#perm-identity`}></use>
      </svg>
    );
  }
}
