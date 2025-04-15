fetch('posts.json')
  .then((response) => response.json())
  .then((tweets) => {
    const tweetFeed = document.getElementById('tweet-feed');
    tweets.forEach((tweet) => {
      const tweetDiv = document.createElement('div');
      tweetDiv.classList.add('tweet');

      tweetDiv.innerHTML = `
        <img src="${tweet.avatar}" alt="Avatar" class="avatar" />
        <div class="content">
          <div class="username">@${tweet.username}</div>
          <div class="text">${tweet.text}</div>
        </div>
      `;
      tweetFeed.appendChild(tweetDiv);
    });
  });
