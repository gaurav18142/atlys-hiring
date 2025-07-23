import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { getPostsFromStorage, setPostsInStorage } from '../utils/home-utils';
import type { PostData } from '../types/Home';

interface PostContextType {
  posts: PostData[] | null;
  addPost: (post: PostData) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<PostData[] | null>(null);

  useEffect(() => {
    const posts = getPostsFromStorage();
    setPosts(posts)
  }, []);

  useEffect(() => {
    if (posts) {
        setPostsInStorage(posts);
    }
  }, [posts]);

  const addPost = function(post: PostData) {
    setPosts((prev) => prev ? [...prev, post] : [post]);
  }

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePosts must be used within an PostProvider');
  }
  return context;
} 