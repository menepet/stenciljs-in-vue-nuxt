import { Component, h, Prop } from '@stencil/core';

@Component({
 tag: 'sample-child-component',
 styleUrl: 'sample-child-component.css',
 shadow: true
})

export class SampleComponent{
 @Prop() childName: string = 'no children at all withou param to parent comp :/'

 render() {
  return (
   <div>
   <h1>{this.childName}</h1>
   </div>
  );
 }
}
