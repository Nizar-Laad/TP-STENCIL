import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
tag: 'app-edition',
styleUrl: 'app-edition.css',
  shadow: true
})
export class AppEdition {
@State() myArticle : any;
@Prop() match : MatchResults;
title: string;
article: string;
autor: string;
_id : any;


componentWillLoad() {
let id = this.match.params.articleid;
fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id)
.then(response =>response.json()).
then(data=>{
this.myArticle=data;
this.title = this.myArticle.title;
this.article = this.myArticle.article;
this.autor = this.myArticle.autor;
this._id = this.myArticle._id;
})
}

editArticle(e) {
e.preventDefault();
console.log("!");
const title = this.title;
const article = this.article;
const autor = this.autor;
const _id = this._id;
const postedited = {
_id, 
title,
article,
autor
};
fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
method: "PUT",
headers: {
Accept: "application/json, text/plain, */*",
"Content-Type": "application/json"
},
body: JSON.stringify(postedited)
})
.then(function(res) {
return res.json();
})
.then(function(data) {
console.log(JSON.stringify(data));
});
}
render() {
    return ( <div class='app-ajout'>
    <p>
    <form action="/action_page.php" method="post">
Title:<br/>
<input type="text" name="Title" placeholder="Text input"onChange={(e:any) => (this.title = e.target.value)}/><br/>

Author:<br/>
<input type="text" name="Auteur" onChange={(e:any) => (this.autor = e.target.value)}/><br/>
<br/>
Article:<br/>
<textarea  form ="formid" name="Article " id="taid" onChange={(e:any) => (this.article = e.target.value)} wrap="soft"></textarea>
  
  <br/>

<stencil-route-link url="/"><button onClick={this.editArticle.bind(this)}>Editer</button></stencil-route-link>
<stencil-route-link url={'detail/'+this.match.params.articleid}>
      <button>
        Annuler
      </button>
    </stencil-route-link>
 </form> 
    </p>

   
  </div>
);
}
}
