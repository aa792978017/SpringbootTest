这是在软件测试课程里面跟同学一起开发的一个用来学习软件测试的小系统，麻雀虽小，但五脏俱全，提供给大家学习使用（agiltest文件夹为项目源代码）


项目名：火车订票系统

技术使用：后端Springboot + Mybatis + Maven包管理 
	  前端：原生html + js + css + jquery

JKD版本：1.8

mysql版本：8

配置文件为 ：application.yml  
	
	其中里面的数据库配置 为  用户名：root   密码 ：123456   数据库名：ticket
	访问端口号：8080

开发工具： idea


项目启动前，新建一个名字为 ticket 数据库，运行ticket.sql，确保配置文件没有问题后即可访问打开


访问前需要修改网页请求的base_url，保证请求畅通


base_url 在项目文件的相对位置：agiletest\src\main\resources\static\static\js    下，自行定制修改
 

在静态资源文件custom.js的头部修改  var base_url = "http://localhost:8080";（这里为默认的请求基地址）


确保上述正确后，即可打开项目(以agiletest文件夹为根目录)，使用maven导包运行


访问地址：
http://localhost:8080/static/fontpage/login.html







	  