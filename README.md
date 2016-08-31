Offline Demo
------------

I set this demo up to show how Firefox and Chrome treat images in offline content differently. It appears that Firefox deletes images associated with cache content upon worker activation; Chrome does not.

The practical effect of this is that Firefox does not have images in offline mode, unless they were explicitly cached.

Steps to use:

1. clone the repo
1. start a webserver like Python's in the repo root `python -m SimpleHTTPServer`
1. load <a href="http://localhost:8000/alpine.html">alpine.html</a> in your browser
1. stop the webserver ^C
1. load <a href="http://localhost:8000/alpine.html">alpine.html</a> in your browser

In Firefox the image breaks. In Chrome it does not.
