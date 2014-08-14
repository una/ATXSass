---
layout: default
title: ATX Sass Meetup
subtitle: Keep Austin Sassy.
id: home
---

<h2>Keep Austin Sassy.</h2>
<p class="intro--description">
	The Austin Sass Meetup is where Austin area creatives come together monthly to discuss the latest in Sass, Compass, and Front End Development. If you're not familiar, <a href="http://sass-lang.com">Sass</a> is a CSS preprocessor, used to ___________ and make life generally awesomer. Curious? Be sure to attend the next meetup!
</p>

<h2> Upcoming Meetup: </h2>

{% for post in site.talks limit:1 %}
  {% include teaser.html post=post %}
{% endfor %}
