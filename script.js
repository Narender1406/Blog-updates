// PAGE NAVIGATION
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}



// --- IMAGE POSTS (PERSISTENT WITH LOCAL STORAGE) ---
let posts = JSON.parse(localStorage.getItem('imagePosts')) || [];

function uploadImage() {
    const input = document.getElementById('imageInput');
    if (input.files.length === 0) {
        alert("Please select an image");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        posts.push(e.target.result);
        localStorage.setItem('imagePosts', JSON.stringify(posts));
        displayPosts();
    };

    reader.readAsDataURL(input.files[0]);
}

function displayPosts() {
    const gallery = document.getElementById('postGallery');
    gallery.innerHTML = "";

    posts.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });
}

displayPosts();



// --- MESSAGES (LOCAL STORAGE) ---
let messages = JSON.parse(localStorage.getItem('messages')) || [];

function sendMessage() {
    const text = document.getElementById('messageInput').value;
    if (text.trim() === "") return;

    messages.push(text);
    localStorage.setItem('messages', JSON.stringify(messages));
    displayMessages();
    document.getElementById('messageInput').value = "";
}

function displayMessages() {
    const list = document.getElementById('messageList');
    list.innerHTML = "";

    messages.forEach(msg => {
        const li = document.createElement('li');
        li.textContent = msg;
        list.appendChild(li);
    });
}

displayMessages();



// --- DARK MODE ---
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
