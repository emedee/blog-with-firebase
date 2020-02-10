<template>
<div class="bordr">
  <div class="home" v-if="display">
    <header>
       <div class="header">
            <img src="../assets/images/logo.png" alt="logo" class="logo">
            <div class="header2"><b class="text1">Zorgblag's Blog</b><br>
            <b class="text2">My So-Called Light-Speed Life</b></div>
        </div>
    </header>
    <hr class="line">
    <div class="div1">
        <ul class="ul"><b>
            <li><a href="#" @click="homePage">Home</a></li>||
            <li><a href="#" @click="addPosts">Post</a></li>
        </b></ul>
    </div>
    <hr class="line2">
    <ul class="push">
        <li v-for="(post, i) in blogPost" :key="i">
            <div class="body1">
                <div class="body2">
                    <h1 class="text3">{{post.caption}}</h1>
                    <p class="text4"><b>Posted {{post.date}}</b></p>
                    <p class="text5">{{post.body}}</p>
                    <button>Edit</button><button>Delete</button>
                </div>
            </div>
        </li>
    </ul>
    <hr class="line">
    <hr class="line2" style="margin-top: -0.1em">
    <div class="footer">
        <p class="footerdesc"><b>Legal disclaimer, copyright, etc</b></p>
        <img src="../assets/images/icon1-1.png" alt="icon" class="icon2">
        <img src="../assets/images/icon2.png" alt="icon" class="icon">
        <img src="../assets/images/icon3.png" alt="icon" class="icon">
        <img src="../assets/images/icon4.png" alt="icon" class="icon">
        <img src="../assets/images/icon5.png" alt="icon" class="icon">
        <img src="../assets/images/icon6.png" alt="icon" class="icon">
        <img src="../assets/images/icon7.png" alt="icon" class="icon">
    </div>
  </div>
  <div class="post" v-if="anotherDisplay">
      <header>
       <div class="header">
            <img src="../assets/images/logo.png" alt="logo" class="logo">
            <div class="header2"><b class="text1">Zorgblag's Blog</b><br>
            <b class="text2">My So-Called Light-Speed Life</b></div>
        </div>
    </header>
    <hr class="line">
    <div class="div1">
        <ul class="ul"><b>
            <li><a href="#" @click="homePage">Home</a></li>||
            <li><a href="#" @click="addPosts">Post</a></li>
        </b></ul>
    </div>
    <hr class="line2">
    <form class="frm">
      <div class="form-group">
        <input type="text" class="caption" v-model="post.caption" placeholder="Add a caption">
      </div>
     
      <div class="form-group">
        <input type="text" class="typePost" v-model="post.body" placeholder="Type a post">
      </div>
      <div class="form-group">
        <input type="date" class="addDate" v-model="post.date" placeholder="Today's Date">
      </div>
      <button class="btn btn-primary" @click="postItem">Post</button>
    </form>
    <hr class="line">
    <hr class="line2" style="margin-top: -0.1em">
    <div class="footer">
        <p class="footerdesc"><b>Legal disclaimer, copyright, etc</b></p>
        <img src="../assets/images/icon1-1.png" alt="icon" class="icon2">
        <img src="../assets/images/icon2.png" alt="icon" class="icon">
        <img src="../assets/images/icon3.png" alt="icon" class="icon">
        <img src="../assets/images/icon4.png" alt="icon" class="icon">
        <img src="../assets/images/icon5.png" alt="icon" class="icon">
        <img src="../assets/images/icon6.png" alt="icon" class="icon">
        <img src="../assets/images/icon7.png" alt="icon" class="icon">
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        display: true,
        anotherDisplay: false,
        updateStatus: false,
        post: {
            caption: '',
            date: '',
            body: '',
        },
        blogPost: [],
      }
    },
    methods: {
      homePage(){
        location.reload();
        this.display = true;
        this.anotherDisplay = false;
      },
      addPosts(){
        
        this.display = false;
        this.anotherDisplay = true;
      },
      postItem(){
          this.blogPost.unshift(this.post);
          this.$http.post('', this.post)
              .then(function(res){
                console.log(res);
              }, function(error){
                console.log(error);
              })
      },
    },
    created(){
        this.$http.get('')
                .then(function(res){
                  return res.json();
                })
                .then(function(data){
                  const resultArray = [];
                  for (let key in data){
                    resultArray.unshift(data[key]);
                  }
                  this.blogPost = resultArray;
                })
  }
}
</script>

<style scoped>
@media (max-width: 575.98px) {
    .text1{
        font-size: 18px !important;
        font-family: serif !important;
    }
    .text2{
        font-size: 10px !important;
        font-family: verdana !important;
        color: rgba(189, 85, 45, 1) !important;
        font-weight: bold !important;
        margin-top: -12px !important;
    }
    .text3{
        font-size: 18px !important;
        width: auto !important;
        margin: auto !important;
    }
    .text4{
        width: auto !important;
        margin: 10px auto !important;
    }
    .text5{
        width: auto !important;
        margin: auto auto 20px !important;
        font-size: 12px !important
    }
    img{
        max-width: auto !important;
        height: 100% !important;
    }
    .body2{
        padding: 10px 10px 30px !important;
    }
    .logo{
        height: 100px !important;
    }
    .header2{
        width: auto !important;
    }
    .bordr{
        margin: 0px !important;
        padding: 2px !important;
    }
    .ul{
        padding: 0px !important;
    }
    .caption, .typePost{
        width: 300px !important;
    }
    .addDate{
        width: 200px !important;
    }
}
body{
    margin-left: 4em;
    margin-right: 4em;
    
}
.frm{
  text-align: center;
}
.push{
    padding: 0px;
}
.bordr{
  margin-left: 10em;
  margin-right: 10em;
}
.header{
    width: auto;
    display: flex;
    justify-content: center;
    /* height: 140px; */
}
.caption{
    margin: 10px;
    padding: 10px;
    width: 400px;
}
.addDate{
    margin: 10px;
    padding: 10px;
    width: 200px;
}
.typePost{
    margin: 10px;
    padding: 10px;
    width: 400px;
    height: 50px;
}
.header2{
  display: flex;
  flex-direction: column;
  align-self: center;
}
img{
    float: left;
}
.text1{
    font-family: cursive;
    font-size: 40px;
    color: rgba(241, 8, 125, 0.842);
    margin-left: 17px;
    font-style: italic;
}
.text2{
    font-family: helvetica;
    font-size: 14.9px;
    font-weight: 10;
    margin-left: 17.7px;
    color: rgba(189, 85, 45, 1);
}
.line{
    background-color: rgba(241, 8, 125, 0.842);
    border-color: rgba(241, 8, 125, 0.842);
    width: auto;
}
li{
    list-style-type: none;
    display: inline;
    padding-left: 20px;
    padding-right: 20px;
    font-family: arial;
    font-size: 13px;
}
a{
    text-decoration: none;
    color: rgba(175, 43, 43, 0.98); 
}
.div1{
    margin-top: -8px;
    text-align: center;
}
.line2{
    background-color: rgba(226, 119, 76, 0.877);
    border-color: rgba(226, 119, 76, 0.877);
    margin-top: -8px;
    width: auto;
}
.color{
    color: rgba(226, 119, 76, 0.877);
}
.blog1{
    border-radius: 15px;
    height: 180px;
    width: 200px;
}
.body2{
    text-align: center;
    border: 2px solid rgba(241, 8, 125, 0.842);
    padding: 10px 0px 30px;
}
.text3{
    font-family: serif;
    font-style: oblique;
    font-size: 37px;
    color: rgba(241, 8, 125, 0.842);
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}
.body1{
    margin-top: -15px;
}
.text4{
    margin-top: -20px;
    font-family: sans-serif;
    color: rgb(94, 129, 42);
}
.text5{
    font-family: verdana;
    font-size: 15px;
    line-height: 2;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    color: rgba(189, 85, 45, 1);
}
.text6{
    font-family: arial;
    color: rgba(221, 12, 64, 0.877); 
    width: 108px;
}
.text6:hover{
    cursor: pointer;
    color: red;
}
.anotherbody{
    margin-top: 2.7em;
}
.footer{
    text-align: center;
}
.icon{
    float: unset;
    margin-top: -0.2em
}
.icon2{
    float: unset;
    margin-top: -0.2em;
    margin-left: -1em;
}
.footerdesc{
    margin-top: 2em;
    font-size: 13px;
    margin-left: 0.6em;
    font-family: helvetica;;
}
hr{
    width: 70%;
}
.addPost{
    display: flex;
    flex-direction: row;
    margin-left: 220px;
}
button:hover{
  cursor: pointer;
}
</style>