import { Component,State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  
    @State()
    articles: any;
    
  
    componentWillLoad() {
      return fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/")
        .then(response => response.json())
        .then(data => {
          this.articles = data;
          console.log(this.articles);
        });
  }
    
  trim(str: string) {
    if(str===null){
      return "Text vide"
    } else {
      let r = Math.min(141, str.length);
      let point = str.length <= 140 ? "" : "...";
      return str.substring(0, r) + point;
    }

  }

  render() {
    return (
      
      <div class='app-home'>
      <stencil-route-link url='/ajout'>
        <button>Nouveau Article</button>
        </stencil-route-link>
        <br/>
      {this.articles.map(elem => 
      <article>
      

    <h1>Titre :{ elem.title}</h1>
    <p>Auteur : {elem.autor}</p>
  
    
  <p>{this.trim(elem.article)}<stencil-route-link url={'detail/'+elem._id}>
          <button name="Detail">Lisez plus</button> </stencil-route-link></p>

        
        
            </article>

      )}
      
    <p>
    
    </p>
  
 
        
       
      </div>
    );
  }
}
