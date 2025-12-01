var posts=["posts/f21b/","posts/30db/","posts/422e/","posts/1f7a/","posts/5d95/","posts/6139/","posts/9c04/","posts/69d9/","posts/b280/","posts/5c27/","posts/20db/","posts/b9a6/","posts/7cd4/","posts/9da6/","posts/35f5/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };