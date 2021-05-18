import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rux-progress',
  styleUrl: 'rux-progress.scss',
  shadow: true,
})
export class RuxProgress {
@Prop() maxvalue: number = 100;
@Prop() value: number;
@Prop() hidelabel: boolean = false;

getProgressAsString(){
  return this.maxvalue === 100 ? `${this.value}%` : `${this.value}/${this.maxvalue}`
}
  render() {
    return (
      <Host>
       
        <progress class="rux-progress" value={this.value} max={this.maxvalue}></progress>
        <output class="rux_progress__value" hidden={this.hidelabel} >{this.getProgressAsString()}</output>

        <slot></slot>
      </Host>
    );
  }

}

/*
*This is how the old component did it 

<progress class="rux-progress" value={this.value} max={this.maxvalue}></progress>
<output class="rux_progress__value" /*need hidden class >{this.getProgressAsString()}</output>

*/