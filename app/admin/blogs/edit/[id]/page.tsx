'use client';

import { BlogEditor } from '@/components/admin/blog/BlogEditor';
import { use } from 'react';

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <BlogEditor postId={id} />;
}
