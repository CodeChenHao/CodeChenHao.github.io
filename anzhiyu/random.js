var posts=["posts/f21b/","posts/422e/","posts/1f7a/","posts/30db/","posts/5d95/","posts/6139/","posts/9c04/","posts/5c27/","posts/20db/","posts/b280/","posts/69d9/","posts/7cd4/","posts/b9a6/","posts/35f5/","posts/9da6/","posts/ba9/","posts/9416/","posts/6658/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };