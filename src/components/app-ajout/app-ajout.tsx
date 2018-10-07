import { Component } from "@stencil/core";

@Component({
  tag: "app-ajout",
  styleUrl: "app-ajout.css",
  shadow: true
})
export class AppAjout {
  title: string;
  article: string;
  author: string;

  appAjout(e) {
    e.preventDefault();
    console.log("!");
    const title = this.title;
    const article = this.article;
    const autor = this.author;
    const payload = {
      title,
      article,
      autor
    };
    fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }



  render() {
    return (
      <div class='app-ajout'>
        <p>
        <form action="/action_page.php" method="post" id="formid">
  Title:<br/>
  <input type="text" name="Title" placeholder="Text input"onChange={(e:any) => (this.title = e.target.value)}/><br/>
  Author:<br/>
  <input type="text" name="Auteur" onChange={(e:any) => (this.author = e.target.value)}/><br/>
  Article:<br/>
  <textarea  form ="formid" name="Article " id="taid" onChange={(e:any) => (this.article = e.target.value)} wrap="soft"></textarea>
  
  <br/>

  <stencil-route-link url="/"><button onClick={this.appAjout.bind(this)}>Ajouter</button></stencil-route-link>
  <stencil-route-link url='/'>
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
