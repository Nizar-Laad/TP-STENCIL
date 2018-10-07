import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
        <stencil-route-link url="/"> <div><h1>Blog des articles </h1></div></stencil-route-link>
      
        </header> 

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/ajout' component='app-ajout'/>
              <stencil-route url="/detail/:articleid" component='app-detail'/>
              <stencil-route url="/suppression/:articleid" component='app-suppression'/>
              <stencil-route url="/edition/:articleid" component='app-edition'/>
              
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
