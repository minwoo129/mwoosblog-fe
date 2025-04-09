import PostList from '@/components/screens/main/PostList';
import usePosts from '@/hooks/usePosts';

const Home = async () => {
  const {fetchPosts} = usePosts();
  const posts = await fetchPosts();
  const testPosts = [
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
    ...posts,
  ];
  return (
    <div className="flex flex-col h-fit items-center sm:px-[20px] md:px-[20px]">
      <PostList posts={testPosts} />
    </div>
  );
};

export default Home;
