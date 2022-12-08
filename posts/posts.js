/* Posts Page JavaScript */

"use strict";

const searchTypeDropdown = document.getElementById("search-type-dropdown");
const categoryDropdown = document.getElementById("user-dropdown");
const categorySection  = document.getElementById("user-section");
const postsTableBody = document.querySelector("#postsTable tbody");



function selectSearchType() {
    let selectedValue = searchTypeDropdown.value;
    
    
    if(selectedValue == "users") {
        loadCategoryDropdown();
    }else if (selectedValue == "all") {
        loadAllPostsTable();
    }

}


function loadUserDropdown() {
    userSection.style.display = "block";
    posts-table.style.display = "none";

    fetch("https://microbloglite.herokuapp.com/api/posts")
    .then((response) => response.json())
    .then((users) => {
        for(const user of users) {
            const option = document.createElement("option");
            option.value = users._Id;
            option.innerText = users.username;
            categoryDropdown.appendChild(option);
        }
    })
}

function loadPostsBy() {
    tableDisplaySection.style.display = "block";
    
    const selectedCategory = categoryDropdown.value;

    fetch("https://microbloglite.herokuapp.com/api/posts")
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            if (posts.userId == selectedUser) {
                posts-table.style.display = "block";
                const row = tbody.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                cell5.innerText= post.likes;
                cell4.innerText = post.createdAt;
                cell3.innerText = post.username;
                cell2.innerText = post.text;
                cell1.innerText = post._id;
            }
        });
    })

}

function loadAllPostsTable() {
    posts-table.style.display = "block";
    fetch("https://microbloglite.herokuapp.com/api/posts")
    .then((response) => response.json())
    .then((posts) => {
        products.forEach ((product) => {
            let row = posts-TableBody.insertRow(-1);
            let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                cell5.innerText= post.likes;
                cell4.innerText = post.createdAt;
                cell3.innerText = post.username;
                cell2.innerText = post.text;
                cell1.innerText = post._id;
            }
    })

}

window.onload = () => {
    searchTypeDropdown.onchange = selectSearchType;
    categoryDropdown.onchange = loadPostsByUsers;
}





