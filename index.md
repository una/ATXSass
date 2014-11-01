---
layout: default
title: ATX Sass Meetup
subtitle: Keeping Austin Sassy.
id: home
---
<h1>{{ page.title }}</h1>
<h2>{{ page.subtitle }}</h2>
<p class="intro--description">
	The Austin Sass Meetup is where Austin area creatives come together monthly to discuss the latest in Sass, Compass, and Front End Development. If you're not familiar, <a href="http://sass-lang.com">Sass</a> is a CSS preprocessor, bringing semantic sugar to web styling, and make life generally awesomer. Curious? Be sure to attend the next meetup!
</p>

<h2> Our Next Event: </h2>
{% for post in site.talks limit:1 %}
  {% include teaser.html post=post %}
{% endfor %}


