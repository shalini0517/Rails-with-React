# Rails + React Integration

A modern setup combining Rails with React using esbuild and Bootstrap and tailwind css.

Author : Shalini

## Prerequisites

- Ruby
- Yarn/npm

## Quick Setup

1. Create a new Rails app with esbuild:
```bash
    rails new railsapp -j=esbuild

2. Add Bootstrap support:

Add to Gemfile:
```ruby:Gemfile
gem 'cssbundling-rails'
Run bundle install
```bash

3. Generate initial Rails structure:
```bash
rails g controller home index

4. Setup React:

Install React dependencies:
```bash
yarn add react react-dom

## Project Structure

app/
├── javascript/
│   ├── react/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   └── index.js
│   └── application.js
└── views/
    └── home/
        └── index.html.erb

application.js

import "./react/src/index"

home/index.html.erb
<div id="welcome"></div>

component

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to React!</h1>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('welcome');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Welcome />);
  }
});

export default Welcome;

start server
```bash
 bin/dev

# Tailwind CSS
https://tailwindcss.com/docs/guides/ruby-on-rails



