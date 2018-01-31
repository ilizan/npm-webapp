# vue 同步

#轮播图最新版有问题，需调整至2.5.4,命令：
cnpm install vue-awesome-swiper@2.5.4 --save

180131test
#方法一
##第一次操作命令
同一个本地仓库推送到两个不同远程仓库：
查看本地仓库 git remote -v
此处显示1个远程仓库

添加远程仓库 git remote add neworigin http://xxx.git

查看本地仓库 git remote -v
添加后此处显示2个远程仓库

先创建新的分支：
$ git branch [name]

然后push
$ git push -u origin [name]


#方法二
新建的项目 需要清空
然后 添加远程仓库 git remote add neworigin http://xxx.git
然后直接push
//推送到服务器代码
git push neworigin master