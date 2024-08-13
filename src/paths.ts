const paths = {
  home() {
    return '/';
  },
  topicShow(topicSlug: string) {
    return `/topic/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    `/topic/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
  `/topic/${topicSlug}/posts/${postId}`;
  }
}

export default paths;