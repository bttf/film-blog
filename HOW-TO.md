## Create a Project with [Ember-CLI]()

```
$ ember new film-blog
$ cd film-blog
```
## Install [Emberfire] - Firebase Adapter for Ember Data

```
$ ember install:addon emberfire
```

Configure adapter accordingly:

```
$ ember g adapter application

```

`ember g` shorthand `ember generate`.

Add the following code:

```
// app/adapters/application.js

import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://your-firebase-handle.firebaseio.com")
});
```

(If you don't have a [Firebase instance, go and get one for free]().)

## Create models

Just one model needed for this simple application: 'Article'.

```
$ ember g model article
```

```
// app/models/article.js

import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  created: attr('date', {
    defaultValue: function() {
      return Date.now();
    }
  })
});
```

## Create routes

The first route will be for creating articles.

```
$ ember g route create
```

```
// app/routes/create.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article');
  }
});
```

```
<!-- app/templates/create.hbs -->

<h1>New article</h1>

<h3>{{title}}</h3>

<p>{{body}} </p>

<hr>

{{input type='text' value=title placeholder='Title'}}

<br>

{{textarea value=body placeholder='Body'}}

<br>

<button {{action 'saveArticle' this}}>Save</button>
```

We can handle actions like 'saveArticle' above using just the route, but it would be more useful in the future if we use an equally-capable controller to handle it.

```
$ ember g controller create
```

```
// app/controllers/create.js

import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveArticle: function(article) {
      article.save().then(function() {
        console.log('Article saved.');
      }, function(err) {
        console.log(err);
      });
    }
  }
});
```

Notice we are using `ObjectController` since we are working with a single model instance in this route.

Let's add a little UI to help keep us informed on whether the article was saved or not.

```
<!-- app/templates/create.hbs -->

( ... )

<br>

{{saveStatus}}

```

```
// app/controller/create.js

import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveArticle: function(article) {
      var controller = this;
      article.save().then(function(article) {
        controller.set('saveStatus', 'Article saved, ' + article.get('created'));
        console.log('Article saved.');
      }, function(err) {
        controller.set('saveStatus', err);
        console.log(err);
      });
    }
  }
});
```

## Index Route

Now that we can save articles let's view them on the front page.

```
$ ember g route index
```

```
// app/routes/index.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('article');
  }
});
```

```
// app/templates/index.hbs

<h3>Recent Articles:</h3>
<ul>

  {{#each article in model}}

    <li>{{article.title}}</li>

  {{/each}}

</ul>

{{outlet}}
```

## Article Route

Finally let's create an article route to view an individual article.

```
$ ember g route article
```

First we have to make a change to our `router.js` file in order to receive URL params for this particular route.

```
// app/router.js

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("create");
  this.route("article", { path: '/article/:id'});
});

export default Router;
```

We utilize the id parameter in our model hook.

```
// app/routes/article.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('article', params.id);
  }
});
```

```
<!-- app/templates/article.hbs -->

<h2>{{title}}</h2>

<hr>

<p>{{body}}</p>

<br>

<sub>Created: {{created}}</sub>

{{outlet}}
```

Now let's change `index.hbs` so that it will list a link to an Article instead of just its title.

```
<h3>Recent Articles:</h3>
<ul>

{{#each article in model}}

  <li>{{#link-to 'article' article}} {{article.title}} {{/link-to}}</li>

{{/each}}

</ul>

{{outlet}}
```

## That's it

There you have a very basic yet functioning blogging app working with a Firebase backend.

Notice how easy it was to set up the Firebase adapter and start making requests to it?
