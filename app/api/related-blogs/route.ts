import { NextRequest, NextResponse } from 'next/server';
import { blogService } from '@/lib/blogService';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '3');

    const data = await blogService.getRelatedBlogs(page, limit);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching related blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch related blogs' }, { status: 500 });
  }
}
