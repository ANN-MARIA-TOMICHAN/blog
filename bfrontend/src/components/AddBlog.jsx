import React, { useState } from 'react';

const AddBlog = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    author: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Blog:", form);
    alert("Blog submitted successfully!");
    setForm({ name: '', description: '', author: '' });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Add New Blog</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Blog Name:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label>Description:</label><br />
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label>Author Name:</label><br />
          <input type="text" name="author" value={form.author} onChange={handleChange} required />
        </div>
        <br />
        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
