import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
 tag: 'sample-component',
 styleUrl: 'sample-component.css',
 shadow: true
})
export class SampleComponent{
 @Prop() bestDrummer: string = 'World'
 @State() isActive = false

 @Method()
 async updateStatement() {
  this.isActive = !this.isActive
 }

 componentDidLoad() {
    console.log('Component successfully loaded')

    setTimeout(() => {
        this.updateStatement();
    }, 2000);
 }

 render() {
    let styles = {
        margin: '20px 0',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#e8e8e8',
      };
  return (
   <div style={styles}>
    <h1>I am a StencilJs web component 😀</h1>
    <h2>Once upon a time there was {this.isActive ? `${this.bestDrummer} and his child:` : ' a great drummer 🥁'}</h2>
   
    {this.isActive ? <sample-child-component child-name="child component: Jason Bohnam"></sample-child-component> : '' }
   </div>
  );
 }
}
