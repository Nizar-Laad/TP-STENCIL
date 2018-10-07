import { Component, Prop,State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css',
  shadow: true
})
export class AppDetail {
  @Prop() match: MatchResults;
  @State() articles:any;
  

  componentWillLoad() {
    let id = this.match.params.articleid;
    console.log(this.match.params.articleid);
    return fetch(
      "https://polymer-101-workshop.cleverapps.io/api/blogpost/"+id
    )   .then(response => response.json())
    .then(data => {
      this.articles = data;
      console.log(this.articles);
        console.log(id);
});

    }
  render() {
    if (this.match && this.match.params.articleid) {
        
      return (
        <div class="app-detail">
         
      
      <p>
        Titre :{ this.articles.title} <br/>
        Auteur : {this.articles.autor} <br/>
        Contenu: <br/>
        {this.articles.article}
      
         <br/>
         <stencil-route-link url={'/edition/'+this.match.params.articleid}>
        <button name="edit ">Editer</button>
        </stencil-route-link>
        <stencil-route-link url={'/suppression/'+this.match.params.articleid}>
        <button name="delete ">Supprimer</button>
        </stencil-route-link>
            </p>
            <stencil-route-link url='/'>
          <button>
            Accueil
          </button>
        </stencil-route-link>
        </div>
      )
    }
      
    }
  }
