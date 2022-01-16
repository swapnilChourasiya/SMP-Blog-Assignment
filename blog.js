// Modal JS

//Selectors

const modal = document.querySelector('.modal');
const logmodal = document.querySelector('.modal-box');
const regmodal = document.querySelector('.modal-box2');
const logBtn = document.querySelector('.log-btn');
const regBtn = document.querySelector('.btn2');
const closebtn = document.querySelector('.close1');
const closebtn2 = document.querySelector('.close2');
const regisNow = document.querySelector('#signUp');
const SignNow = document.querySelector('#signIn');
const logInBtn = document.querySelector('.logIn-btn');
const logOutBtn = document.querySelector('.logOut-btn');

//Event Listener

logBtn.addEventListener('click', openModal);
regBtn.addEventListener('click', openregModal);
closebtn.addEventListener('click', closeModal);
closebtn2.addEventListener('click', closeModal);
regisNow.addEventListener('click', closeModal2);
SignNow.addEventListener('click', closeModal2);
logOutBtn.addEventListener('click', bringLogIn);
window.addEventListener('click', outclick);

//Functions

function openModal(){
    modal.style.display = 'block';
    logmodal.style.display='block';
    regmodal.style.display='none';
}
function openregModal(){
    logmodal.style.display='none';
    regmodal.style.display='block';
}
function closeModal(){
    modal.style.display = 'none';
}
function closeModal2(){
    modal.style.display = 'none';
    alert("Successfully Logged In");
    logInBtn.style.display='none';
    logOutBtn.style.display='Block';
}
function bringLogIn(){
    alert("Successfully Logged Out");
    logOutBtn.style.display='none';
    logInBtn.style.display='Block';
}
function outclick(e){
    if(e.target == modal){
        closeModal();
    }
}

// Blog JS

//Selectors

const blogInput = document.querySelector('.blog-input');
const addBtn = document.querySelector('.add-btn');
const blogList = document.querySelector('.blog-list');


//Event Listeners

addBtn.addEventListener('click', addBlog);
blogList.addEventListener('click', deleteBlog);
document.addEventListener('DOMContentLoaded', getBlogs);

//Functions

function addBlog(event){

    event.preventDefault(); // prevent form from submitting

    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");

    const blogLi = document.createElement("li");
    // blogLi.innerText = blogInput.value;
    blogLi.innerText = blogInput.value;
    blogLi.classList.add("blog-item");
    blogDiv.appendChild(blogLi);

    //save blogs

    saveOnLocal(blogInput.value);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    blogDiv.appendChild(deleteButton);

    blogList.appendChild(blogDiv);

    blogInput.value= "";

}

function deleteBlog(e){
 const item = e.target;
 if(item.classList[0] === "delete-btn"){
    const divblock = item.parentElement;
    // console.log(divblock);
    // console.log(indexOf(divblock));
     removeLocal(divblock);
     divblock.remove();
 }
}

//function to save blogs on local storage

function saveOnLocal(blog){
    //if we already have blogs
    let blogs;
    if(localStorage.getItem("blogs") === null){
        blogs =[];
    }
    else{
        blogs = JSON.parse(localStorage.getItem("blogs"));
    }

    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));

}

function getBlogs(){
 //if we already have blogs
 let blogs;
 if(localStorage.getItem("blogs") === null){
     blogs =[];
 }
 else{
     blogs = JSON.parse(localStorage.getItem("blogs"));
 }
 blogs.forEach(function(blog){

    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");

    const blogLi = document.createElement("li");
    blogLi.innerText = blog;
    blogLi.classList.add("blog-item");

    blogDiv.appendChild(blogLi);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    blogDiv.appendChild(deleteButton);

    blogList.appendChild(blogDiv);
});
}

function removeLocal(blog){
    let blogs;
    if(localStorage.getItem("blogs") === null){
        blogs =[];
    }
    else{
        blogs = JSON.parse(localStorage.getItem("blogs"));
    }
    const blogIndex = blog.children[0].innerText;
    blogs.splice(blogs.indexOf(blogIndex),1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
}