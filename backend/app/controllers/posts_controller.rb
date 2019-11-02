require 'rss'
require 'open-uri'

class PostsController < ApplicationController
  def index
    url = 'http://feeds.feedburner.com/marginalrevolution/feed'

    items = open(url) do |rss|
      feed = RSS::Parser.parse(rss)
      feed.items.map do |item|
        {
          title: item.title,
          content: item.content_encoded,
          description: item.description,
          link: item.link,
          pub_date: item.pubDate
        }
      end
    end

    render json: items
  end
end
