const fetchData = async () => {
  const postsContainer = document.querySelector("#postsContainer");

  // Fetch data from API

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  const html = data.map(
    (post) => `<div class="post">
            <p class="post-title">${post.title}</p>
            <p>${post.body}</p>

            <a href="post.html?id=${post.id}">Read More ...</a>
        </div>`
  );

  postsContainer.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", fetchData);
