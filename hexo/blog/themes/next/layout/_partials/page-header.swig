<header class="post-header">

	<{% if theme.seo %}h2{% else %}h1{% endif %} class="post-title" itemprop="name headline">{{ page.title }}</{% if theme.seo %}h2{% else %}h1{% endif %}>

	<div class="post-meta">
		{% if page.description %}
			<div class="post-description">{{ page.description }}</div>
		{% endif %}
		<span class="post-time">
            {% if theme.post_meta.created_at %}
              <span class="post-meta-item-icon">
                <i class="fa fa-calendar-o"></i>
              </span>
              {% if theme.post_meta.item_text %}
                <span class="post-meta-item-text">{{ __('post.posted') }}</span>
              {% endif %}
              <time title="{{ __('post.created') }}" itemprop="dateCreated datePublished" datetime="{{ moment(page.date).format() }}">
                {{ date(page.date, config.date_format) }}
              </time>
            {% endif %}
		</span>
	</div>


</header>
