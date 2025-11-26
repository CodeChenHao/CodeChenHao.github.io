var posts=["2025/04/19/CentOS7模板机搭建/","2025/04/20/CentOS7配置静态IP/","2025/11/23/Docker2Compose/","2023/11/12/Html教程/","2024/10/13/JDBC/","2025/11/10/Docker教程/","2025/10/05/Linux常用脚本/","2025/04/18/VMware下载教程/","2025/04/18/Linux教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };