# The case of the missing offline images

I set this demo up to show how Firefox and Chrome treat images in offline content differently. If you follow the instructions below, you'll see that Firefox does not have images in offline mode, unless they were explicitly cached. Chrome does have images in offline mode, even if they were not explicitly cached.

Steps to use:

1. clone the repo
1. start a webserver like Python's in the repo root `python -m SimpleHTTPServer`
1. load <a href="http://localhost:8000/alpine.html">alpine.html</a> in your browser
1. stop the webserver ^C
1. reload (cmd+r or ctrl+r) <a href="http://localhost:8000/alpine.html">alpine.html</a> in your browser

The "missing alpine" image is not explicitly cached. The "present alpine" image is explicitly cached. When offline, the missing image is only missing in Firefox, not in Chrome.

## What's going on here?

When I first noticed this issue, I wondered, "Why is Firefox missing the images? Is it clearing them from standard browser cache during the serviceworker lifecycle, or are they still in standard browser cache but somehow unavailable to pages served from serviceworker cache?" I also wondered which browser was behaving according to the serviceworker specification.

I reached out to <a href="https://blog.wanderview.com/">Ben Kelly</a> to see if he could answer my questions. And sure enough, he could. He pointed out that cmd+r and ctrl+r force server re-validation. And there's no server.

In Firefox, a missing server means missing resources -- totally expected behavior. Whatever is happening in Chrome seems to be Clever&#153;, and makes this simple demo Just Work&#153;. But it doesn't seem to be related to the serviceworker specification: Opening a new tab and pasting the URL there works great in both browsers.

### Appendix

Here's the error I see in the Firefox developer console:

```
Failed to load ‘http://localhost:8000/missing_alpine.jpg’. A ServiceWorker passed a promise to FetchEvent.respondWith() that resolved with non-Response value ‘undefined’.
```
