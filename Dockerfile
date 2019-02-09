FROM ruby:2.6.0

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN gem install bundler
WORKDIR /app

ENV BUNDLE_PATH=/app/vendor/bundle


