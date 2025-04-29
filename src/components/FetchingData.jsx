import useFetch from '../hooks/useFetch';

const FetchingData = () => {
  const { data, error, loading } = useFetch('posts');

  const Loading = () => <p>Loading...</p>;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>An error occurred</p>;
  }

  return (
    <>
      <h1>Fetching Data</h1>
      {data.length > 0 ? (
        data.map((post) => (
          <div key={post.id}>
            <p><strong>Id:</strong> {post.id}</p>
            <p><strong>Title:</strong> {post.title}</p>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FetchingData;
