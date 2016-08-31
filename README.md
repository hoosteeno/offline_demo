# Offline Demo

I set this demo up to show how Firefox and Chrome treat images in offline content differently. Firefox does not have images in offline mode, unless they were explicitly cached. Chrome does have images in offline mode, even if they were not explicitly cached.

Steps to use:

1. clone the repo
1. start a webserver like Python's in the repo root `python -m SimpleHTTPServer`
1. load <a href="http://localhost:8000/alpine.html">alpine.html</a> in your browser
1. stop the webserver ^C
1. load <a href="http://localhost:8000/alpine.html">alpine.html</a> in your browser

The "missing alpine" image is not explicitly cached. The "present alpine" image is explicitly cached. When offline, the missing image is only missing in Firefox, not in Chrome.

## Questions

* Why is Firefox missing the images? Is it clearing them from standard browser cache during the serviceworker lifecycle, or are they still in standard browser cache but somehow unavailable to pages served from serviceworker cache?
* Which browser is behaving more according to spec?
* Which browser is behaving more according to user expectations? (I personally prefer Chrome's behavior here.)
