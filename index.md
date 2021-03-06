---
layout: default
title: ATX Sass Meetup
subtitle: Keeping Austin Sassy.
id: home
---
<section class="intro--home">
	<div class="logo-image--header"></div>
	<article>
		<h2>{{ page.subtitle }}</h2>
		<p class="intro--description">
			The Austin Sass Meetup is where Austin area creatives come together monthly to discuss the latest in Sass, Compass, and Front End Development. If you're not familiar, <a href="http://sass-lang.com">Sass</a> is a CSS preprocessor, which allows nested rules, variables, mixins, selector inheritance, and more. Curious? <span class="focus">Be sure to <a href="http://twitter.com/atxsass">follow us on Twitter</a> and attend the next <a href="http://www.meetup.com/ATXSass">meetup!</a></span>
		</p>
	</article>
</section>
<section class="next-event">
	<h2>Our Next Event: </h2>

	{% for post in site.posts reversed limit:1 %}
	  {% if post.thumbnail-image %}
	  <div class="img-container">
	  	<img src="../images/{{ post.thumbnail-image }}" alt="{{ post.title image}}" class="post-thumb">
	  </div>
	  	{% else %}
	  	<div class="img-container">
	  	 <div class="img-container">
	  		<img src="../images/thumb-placeholder.jpg" alt="Placeholder image for {{post.title}}">
	  	</div>
	  {%endif%}
	  {% include teaser.html post=post %}
	{% endfor %}
</section>
