import { useState } from 'react';
import usePost from '../hooks/usePost';

const PostingData = () => {
  const { postData, response, error } = usePost('posts');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData({
      title,
      body,
      userId: 1,
    });
    setSubmitted(true);
  };

  const handleGoBack = () => {
    setTitle('');
    setBody('');
    setSubmitted(false);
  };

  if (submitted && response) {
    return (
      <div>
        <h1>Post Submitted Successfully!</h1>
        <p><strong>Id:</strong> {response.id}</p>
        <p><strong>Title:</strong> {response.title}</p>
        <p><strong>Body:</strong> {response.body}</p>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body: </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Post</button>
      </form>
      {error && <p>Error posting data.</p>}
    </div>
  );
};

export default PostingData;
