export interface Author {
  _id: string;
  username: string;
}

export interface Blog {
  _id: string;
  title: string;
  author: Author;
  content: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  tags: string[];
  slug: string;
}

export interface BlogPost {
  _id?: string;
  title: string;
  content: string;
  tags: string[];
  excerpt: string;
  imageUrl: string;
  slug?: string;
  author?: any;
  createdAt?: string;
  updatedAt?: string;
}

export interface BlogListResponse {
  posts: Blog[];
  pagination: {
    totalPosts: number;
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface ImageUploadResponse {
  success: boolean;
  imageUrl?: string;
  message?: string;
}

export interface BlogDetailResponse {
  post: Blog;
}

export interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    page?: string;
    tags?: string;
    search?: string;
  }>;
}
