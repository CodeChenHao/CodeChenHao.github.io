var posts=["posts/422e/","posts/30db/","posts/f21b/","posts/5d95/","posts/9c04/","posts/1f7a/","posts/5c27/","posts/6139/","posts/20db/","posts/b280/","posts/69d9/","posts/35f5/","posts/7cd4/","posts/9da6/","posts/b9a6/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };