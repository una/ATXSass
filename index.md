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
			The Austin Sass Meetup is where Austin area creatives come together monthly to discuss the latest in Sass, Compass, and Front End Development. If you're not familiar, <a href="http://sass-lang.com">Sass</a> is a CSS preprocessor, which allows nested rules, variables, mixins, selector inheritance, and more. Curious? Be sure to attend the next meetup!
		</p>
	</article>
</section>
<section class="next-event">
	<h2>Our Next Event: </h2>

	<!-- Why is reversed not working here? -->

	{% for post in site.talks limit:1 reversed %}
	  {% if post.thumbnail-image %}
	  <div class="img-container">
	  	<img src="../images/{{ post.thumbnail-image }}" alt="{{ post.title image}}" class="post-thumb">
	  </div>
	  <div class="img-container">
	  	{% else %}
	  	 <div class="img-container">
	  		<img src="../images/thumb-placeholder.jpg" alt="Placeholder image for {{post.title}}">
	  	</div>
	  {%endif%}
	  {% include teaser.html post=post %}
	{% endfor %}
</section>