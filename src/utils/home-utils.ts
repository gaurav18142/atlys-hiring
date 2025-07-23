export function notImplementedAlert() {
  alert('Functionality not implemented');
}

export function getPostsFromStorage() {
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
}

export function setPostsInStorage(posts: any) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

export function timeAgo(isoTimestamp: string) {
  const now = new Date();
  const past = new Date(isoTimestamp);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'week', seconds: 604800 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.unit}(s) ago`;
    }
  }
  return 'just now';
}