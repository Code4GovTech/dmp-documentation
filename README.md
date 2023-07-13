<h2 align="center">Code for GovTech </h2>

## [Code for GovTech (C4GT)](https://c4gt.netlify.app/) Open Source Program
<br/>
<a href="https://c4gt.netlify.app/"></a>
<div align="Center"><img src="https://static.wixstatic.com/media/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png/v1/fill/w_2266,h_2168,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png" height ="500" align="Center"/><br>
</div>

> ### 📌 “We believe open source is a public good and across every industry, we have a responsibility to come together to improve and support the security of open-source software we all depend on.”.😍😍 [Code for GovTech (C4GT)](https://c4gt.netlify.app/).

### C4GT has been conceptualised as a summer coding program to create a community that can build and contribute to global digital public goods.

> ####   📌 An opportunity for 3rd/4th year engineering students from Tier 1/2 campuses in India to experience the GovTech space.<BR>
> ####   📌 Organized annually over 3 months (mid May-mid Aug), anchored by Samagra with support from partners.<BR>
> ####   📌 There will be a set of GovTech problem statements every year for the participants to work on.<BR>
> ####   📌 Shortlisted participants will receive mentorship of leading practitioners in GovTech over 3 months.<BR><BR>


### This repository is created to hold every documentation generated during C4GT.This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.You Can ( <a href="https://c4gt.netlify.app/" target="_blank">Visit 🚀</a> )


#### If you have any queries or any suggestions then reach out to us at <a href="mailto:">Mail</a>.



#### In order to make a hassle-free environment, I implore you all (_while contributing_) to follow the instructions mentioned below! Happy Submissions :slightly_smiling_face:

<BR>


</div>

<div align="center">

## 👨‍💻 Tech Stack:
![RUBY](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![SAAS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Angular.js](https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
<img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
 
</div>
<BR>
 

<!-- <h1 align="center">Project Admin</h1>

<table align="center">
<tr>
<td align="center"><a href=""><img src="" width=150px height=150px /></a></br> <h4 style="color:blue;">ADMIN-NAME
</h4><br/>
<a href=""><img src="https://mpng.subpng.com/20180324/vhe/kisspng-linkedin-computer-icons-logo-social-networking-ser-facebook-5ab6ebfe5f5397.2333748215219374063905.jpg" width="32px" height="32px"></a></td>

</tr>
</table>


<h1 align="center">Our valuable Contributors ✨</h1>

<a href="https://github.com/Code4GovTech/C4GT/graphs/contributors">
<img src=""/>
</a>
-->
 <br>
 
 <h1 align="center"> 📌 Contributing Guidelines </h1>

## Basics of Git and GitHub

### Git & GitHub

Before we proceed, it's better to know the difference between Git and Github. Git is a version control system (VCS) that allows us to keep track of the history of our source code , whereas GitHub is a service that hosts Git projects. 

We assume you have created an account on Github and installed Git on your System.

Now enter your name and E-mail (used on Github) address in Git, by using following command.

```
$ git config --global user.name "YOUR NAME"
$ git config --global user.email "YOUR EMAIL ADDRESS"
```

This is an important step to mark your commits to your name and email.

<br />

### Fork a project

You can make a copy of the project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

<p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>
Click on fork to create a copy of project to your account. This creates a separate copy for you to work on.

<br />

<br />

### Clone the forked project

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

```
$ git clone https://github.com/Code4GovTech/C4GT.git
```

Now you have the project on your local machine.

<br />

### Add a remote (upstream) to original project repository

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

```
$ cd <your-forked-project-folder>
$ git remote add upstream https://github.com/Code4GovTech/C4GT
```

You will see the benefits of adding remote later.

<br />

### Synchronizing your fork

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.

```
$ git checkout main
$ git fetch upstream
$ git merge upstream/main
$ git push origin main
```

The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

<br />

### Create a new branch for a feature or bugfix

Usually, all repositories have a main branch that is regarded to be stable, and any new features should be developed on a separate branch before being merged into the main branch. As a result, we should establish a new branch for our feature or bugfix and go to work on the issue. 

```
$ git checkout -b <feature-branch>
```

This will create a new branch out of master branch. Now start working on the problem and commit your changes.

```
$ git add --all
$ git commit -m "<commit message>"
```

The first command adds all the files or you can add specific files by removing -a and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes. If you are solving an issue on original repository, you should add the issue number like #35 to your commit message. This will show the reference to commits in the issue.

<br />

### Push code and create a pull request

You now have a new branch containing the modifications you want in the project you forked. Now, push your new branch to your remote github fork. 

```
$ git push origin <feature-branch>
```
Now you are ready to help the project by opening a pull request means you now tell the project managers to add the feature or bug fix to original repository. You can open a pull request by clicking on green icon -

<p align="center">  <img  src="https://i.imgur.com/aGaqAD5.png">  </p>

Remember your upstream base branch should be main and source should be your feature branch. Click on create pull request and add a name to your pull request. You can also describe your feature.

Congratulations! You've already made your first contribution.🥳

Good Luck for your journey


      
 
<span> <h2 align ="center">Join the Community  ⚡</h2>
<div align ="center">
<a  href="https://www.youtube.com/channel/UCfkXErS-f87xUQkmSKSC8bg" target="_blank"><img alt="YouTube" src="https://img.shields.io/badge/Youtube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" /></a>
<a  href="https://www.linkedin.com/company/code-for-govtech" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:"><img  alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a  href="https://discord.gg/WrZ5wXmX"><img alt=" Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"></a>
<a  href="https://www.instagram.com/beasidehustler/"><img alt="Instagram" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>



<div align="center">
 
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)


</div>

<div align="center">

<a href="https://github.com/Code4GovTech/C4GT"><img src="https://sloc.xyz/github/Code4GovTech/C4GT" alt="LOC" /></a>
<a href="https://github.com/Code4GovTech/C4GT"><img src="https://img.shields.io/github/stars/Code4GovTech/C4GT" alt="Stars Badge" /></a>
<a href="https://github.com/Code4GovTech/C4GT/network/members"><img src="https://img.shields.io/github/forks/Code4GovTech/C4GT" alt="Forks Badge" /></a>
<a href="https://github.com/Code4GovTech/C4GT/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Code4GovTech/C4GT?color=2b9348" ></a>

<!--[![HitCount](http://hits.dwyl.com/Code4GovTech/C4GT/Code4GovTech/C4GT.svg)](http://hits.dwyl.com/Code4GovTech/C4GT/Code4GovTech/C4GT)-->

[![GitHub license](https://img.shields.io/github/license/Code4GovTech/C4GT?logo=github)](https://github.com/Code4GovTech/C4GT/blob/master/LICENSE)


</div>

<div align="Center">

### © 2023 Code for GovTech (C4GT) and contributors
### This project is licensed under the [**MIT license**]().

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

 </div>
