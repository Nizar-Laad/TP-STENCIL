
import { Component, Prop, State } from '@stencil/core';

import { MatchResults, RouterHistory } from '@stencil/router';





@Component({

tag: 'app-suppression'


})

export class AppSuppression {



@Prop() history : RouterHistory;

@Prop() match : MatchResults;



@State() msg = "";



@State() article : any ;





componentWillLoad() {

let id = this.match.params.articleid;



fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id,{

method: 'DELETE'

})

.then(response => {if (response.ok){

this.msg = "Article supprimé";

console.log(this.msg)}


else{

this.msg = "Erreur occurée lors de suppression";

console.log(this.msg)}

});

this.history.goBack(); 


}


render() {

    
if(this.match && this.match.params.articleid &&this.msg=="Article supprimé")
{
return (
    <div>Article supprimé
        <stencil-route-link url="/">
      <button>
        Accueil
      </button>
    </stencil-route-link>
    <stencil-route-redirect url="/" />
    
    </div>
  );

}

}
}

