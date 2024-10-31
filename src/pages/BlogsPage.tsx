import React from 'react';
import PageTitle from '../components/pageTitle/PageTitle';
import Blogs from '../components/blogs/Blogs';
import Pagination from '../components/pagination/Pagination';

const BlogsPage: React.FC = () => {
  return (
    <div>
      <PageTitle title='Our' span='Blogs'/>
      <Blogs/>
      <Pagination totalPages={5}/>
    </div>
  )
}

export default BlogsPage;
