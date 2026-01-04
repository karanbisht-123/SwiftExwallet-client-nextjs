'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import {
  Tag,
  Save,
  AlertCircle,
  X,
  Loader2,
  Check,
  Eye,
  FileText,
  Trash2,
  Plus,
} from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { adminService } from '@/lib/adminService';
import { ImageUpload } from './ImageUpload';
import { Toast } from './Toast';
import { useRouter } from 'next/navigation';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />,
}) as React.ComponentType<any>;

interface BlogEditorProps {
  postId?: string;
}

interface DraftPost extends BlogPost {
  id: string;
  savedAt: string;
}

const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL || '';

const getFullImageUrl = (url: string): string => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${S3_BASE_URL}/${url}`;
};

const processHtmlContent = (html: string): string => {
  if (!html) return html;
  return html.replace(/<img\s+[^>]*src="([^"]*)"[^>]*>/g, (match, src) => {
    return match.replace(src, getFullImageUrl(src));
  });
};

const stripBaseUrlFromContent = (html: string): string => {
  if (!html) return html;
  return html.replace(new RegExp(S3_BASE_URL, 'g'), '');
};

const BlogPreview: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10 rounded-t-2xl">
          <h2 className="text-xl font-bold text-gray-900">Preview</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <article className="p-8">
          {post.imageUrl && (
            <img
              src={getFullImageUrl(post.imageUrl)}
              alt={post.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
          )}

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title || 'Untitled'}</h1>

          {post.excerpt && <p className="text-xl text-gray-600 mb-6 italic">{post.excerpt}</p>}

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: processHtmlContent(post.content) || '<p>No content yet...</p>',
            }}
          />
        </article>
      </div>
    </div>
  );
};

const DraftsModal: React.FC<{
  drafts: DraftPost[];
  onClose: () => void;
  onLoadDraft: (draft: DraftPost) => void;
  onDeleteDraft: (draftId: string) => void;
}> = ({ drafts, onClose, onLoadDraft, onDeleteDraft }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Saved Drafts</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
          {drafts.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No drafts saved yet</p>
              <p className="text-gray-400 text-sm mt-2">
                Start writing to automatically save drafts
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {drafts.map(draft => (
                <div
                  key={draft.id}
                  className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg truncate mb-1">
                        {draft.title || 'Untitled Draft'}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                        {draft.excerpt || 'No description'}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>Saved: {new Date(draft.savedAt).toLocaleString()}</span>
                        {draft.tags.length > 0 && (
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {draft.tags.length} tags
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => onLoadDraft(draft)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete this draft?')) {
                            onDeleteDraft(draft.id);
                          }
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const BlogEditor: React.FC<BlogEditorProps> = ({ postId }) => {
  const router = useRouter();
  const quillRef = useRef<any>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved');
  const [showPreview, setShowPreview] = useState(false);
  const [showDrafts, setShowDrafts] = useState(false);
  const [drafts, setDrafts] = useState<DraftPost[]>([]);
  const [currentDraftId, setCurrentDraftId] = useState<string | null>(null);

  const [post, setPost] = useState<BlogPost>({
    title: '',
    content: '',
    tags: [],
    excerpt: '',
    imageUrl: '',
  });

  const [currentTag, setCurrentTag] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type });
  }, []);

  const loadDrafts = useCallback(async () => {
    try {
      const result = await (window as any).storage.list('draft:', false);
      if (result?.keys) {
        const draftPromises = result.keys.map(async (key: string) => {
          try {
            const draftResult = await (window as any).storage.get(key, false);
            if (draftResult?.value) {
              return JSON.parse(draftResult.value) as DraftPost;
            }
          } catch (error) {
            console.error(`Error loading draft ${key}:`, error);
          }
          return null;
        });
        const loadedDrafts = (await Promise.all(draftPromises)).filter(
          (d): d is DraftPost => d !== null
        );
        setDrafts(
          loadedDrafts.sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime())
        );
      }
    } catch (error) {
      console.error('Error loading drafts:', error);
    }
  }, []);

  const saveDraft = useCallback(async () => {
    if (!post.title && !post.content) return;

    try {
      const draftId =
        currentDraftId || `draft:${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const draft: DraftPost = {
        ...post,
        id: draftId,
        savedAt: new Date().toISOString(),
      };

      await (window as any).storage.set(draftId, JSON.stringify(draft), false);
      if (!currentDraftId) {
        setCurrentDraftId(draftId);
      }
      await loadDrafts();
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  }, [post, currentDraftId, loadDrafts]);

  const handleSaveDraft = useCallback(async () => {
    setAutoSaveStatus('saving');
    await saveDraft();
    setAutoSaveStatus('saved');
    showToast('Draft saved successfully', 'success');
  }, [saveDraft, showToast]);

  const loadDraft = useCallback(
    (draft: DraftPost) => {
      setPost({
        title: draft.title,
        content: draft.content,
        tags: draft.tags,
        excerpt: draft.excerpt,
        imageUrl: draft.imageUrl,
      });
      setCurrentDraftId(draft.id);
      setShowDrafts(false);
      showToast('Draft loaded successfully', 'info');
    },
    [showToast]
  );

  const deleteDraft = useCallback(
    async (draftId: string) => {
      try {
        await (window as any).storage.delete(draftId, false);
        await loadDrafts();
        if (currentDraftId === draftId) {
          setCurrentDraftId(null);
        }
        showToast('Draft deleted successfully', 'success');
      } catch (error) {
        console.error('Error deleting draft:', error);
        showToast('Failed to delete draft', 'error');
      }
    },
    [currentDraftId, loadDrafts, showToast]
  );

  const createNewDraft = useCallback(() => {
    setPost({
      title: '',
      content: '',
      tags: [],
      excerpt: '',
      imageUrl: '',
    });
    setCurrentDraftId(null);
    setValidationErrors({});
    showToast('New draft created', 'info');
  }, [showToast]);

  useEffect(() => {
    loadDrafts();
  }, [loadDrafts]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }, { size: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['blockquote', 'code-block'],
          ['link', 'image', 'video'],
          [{ align: [] }],
          ['clean'],
        ],
        handlers: {
          image: async function () {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();

            input.onchange = async () => {
              const file = input.files?.[0];
              if (file) {
                try {
                  setIsUploading(true);
                  const result = await adminService.uploadImage(file);

                  if (result?.imageUrl) {
                    const quill = quillRef.current?.getEditor();
                    if (quill) {
                      const range = quill.getSelection(true);
                      quill.insertEmbed(range.index, 'image', result.imageUrl);
                      quill.setSelection(range.index + 1);
                    }
                    showToast('Image inserted successfully', 'success');
                  } else {
                    throw new Error('Failed to upload image');
                  }
                } catch (error) {
                  console.error('Image upload error:', error);
                  showToast(
                    error instanceof Error ? error.message : 'Failed to upload image',
                    'error'
                  );
                } finally {
                  setIsUploading(false);
                }
              }
            };
          },
        },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [showToast]
  );

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'list',
    'indent',
    'link',
    'image',
    'video',
    'blockquote',
    'code-block',
    'align',
  ];

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;

      setIsInitialLoading(true);
      try {
        const response = await adminService.getPost(postId);
        const postData = response?.post || response;

        // Process content to add full URLs to images
        const processedContent = postData?.content ? processHtmlContent(postData.content) : '';

        setPost({
          title: postData?.title || '',
          content: processedContent,
          tags: Array.isArray(postData?.tags) ? postData.tags : [],
          excerpt: postData?.excerpt || '',
          imageUrl: postData?.imageUrl || '',
        });

        showToast('Post loaded successfully', 'success');
      } catch (error) {
        console.error('Error fetching post:', error);
        showToast(error instanceof Error ? error.message : 'Failed to load post', 'error');
        setTimeout(() => router.push('/admin/blogs'), 2000);
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchPost();
  }, [postId, router, showToast]);

  useEffect(() => {
    const autoSaveTimer = setTimeout(() => {
      if (post.title || post.content) {
        setAutoSaveStatus('saving');
        saveDraft().then(() => {
          setAutoSaveStatus('saved');
        });
      }
    }, 3000);

    return () => clearTimeout(autoSaveTimer);
  }, [post.title, post.content, post.excerpt, post.tags, saveDraft]);

  const validatePost = useCallback(() => {
    const errors: Record<string, string> = {};

    if (!post?.title?.trim()) {
      errors.title = 'Title is required';
    } else if (post.title.trim().length < 5) {
      errors.title = 'Title must be at least 5 characters long';
    }

    if (!post?.content?.trim()) {
      errors.content = 'Content is required';
    }

    if (!Array.isArray(post?.tags) || post.tags.length === 0) {
      errors.tags = 'At least one tag is required';
    }

    if (!post?.excerpt?.trim()) {
      errors.excerpt = 'Excerpt is required';
    } else if (post.excerpt.trim().length < 10) {
      errors.excerpt = 'Excerpt must be at least 10 characters long';
    }

    return errors;
  }, [post]);

  const handleFeaturedImageUpload = async (file: File) => {
    if (!file) {
      showToast('Please select a valid image file', 'error');
      return;
    }

    setIsUploading(true);
    try {
      const result = await adminService.uploadImage(file);

      if (result?.imageUrl) {
        setPost(prevPost => ({
          ...prevPost,
          imageUrl: result.imageUrl ?? '',
        }));
        showToast('Image uploaded successfully', 'success');
      } else {
        throw new Error(result?.message || 'Failed to upload featured image');
      }
    } catch (error) {
      console.error('Image upload error:', error);
      showToast(error instanceof Error ? error.message : 'Failed to upload image', 'error');
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag?.trim()) {
      e.preventDefault();

      const trimmedTag = currentTag.trim();
      const currentTags = post?.tags || [];

      if (currentTags.includes(trimmedTag)) {
        showToast('Tag already exists', 'error');
        return;
      }

      setPost(prevPost => ({
        ...prevPost,
        tags: [...currentTags, trimmedTag],
      }));

      setCurrentTag('');

      if (validationErrors?.tags) {
        setValidationErrors(prev => ({ ...prev, tags: '' }));
      }
    }
  };

  const handleRemoveTag = useCallback((tagToRemove: string) => {
    if (!tagToRemove) return;

    setPost(prevPost => ({
      ...prevPost,
      tags: (prevPost?.tags || []).filter(tag => tag !== tagToRemove),
    }));
  }, []);

  const handleSave = async () => {
    const errors = validatePost();
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      showToast('Please fix the validation errors', 'error');
      return;
    }

    setIsSaving(true);
    try {
      const completePost: BlogPost = {
        title: post?.title?.trim() || '',
        content: stripBaseUrlFromContent(post?.content?.trim() || ''),
        tags: post?.tags || [],
        excerpt: post?.excerpt?.trim() || '',
        imageUrl: post?.imageUrl || '',
      };

      if (postId) {
        await adminService.updatePost(postId, completePost);
      } else {
        await adminService.createPost(completePost);
      }

      showToast(postId ? 'Post updated successfully' : 'Post published successfully', 'success');

      if (currentDraftId) {
        try {
          await (window as any).storage.delete(currentDraftId, false);
        } catch (error) {
          console.error('Error deleting draft:', error);
        }
      }

      setTimeout(() => router.push('/admin/blogs'), 1500);
    } catch (error) {
      console.error('Save error:', error);
      showToast(
        error instanceof Error
          ? error.message
          : postId
            ? 'Failed to update post'
            : 'Failed to create post',
        'error'
      );
    } finally {
      setIsSaving(false);
    }
  };

  const clearValidationError = useCallback(
    (field: string) => {
      if (validationErrors?.[field]) {
        setValidationErrors(prev => ({ ...prev, [field]: '' }));
      }
    },
    [validationErrors]
  );

  if (isInitialLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <span className="text-lg text-gray-600">Loading post...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {showPreview && <BlogPreview post={post} onClose={() => setShowPreview(false)} />}
      {showDrafts && (
        <DraftsModal
          drafts={drafts}
          onClose={() => setShowDrafts(false)}
          onLoadDraft={loadDraft}
          onDeleteDraft={deleteDraft}
        />
      )}

      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {postId ? 'Edit Post' : 'Create New Post'}
              </h1>
              <div className="flex items-center gap-2 text-sm">
                {autoSaveStatus === 'saving' && (
                  <span className="text-gray-500 flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Saving draft...
                  </span>
                )}
                {autoSaveStatus === 'saved' && (
                  <span className="text-green-600 flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                    <Check className="w-3 h-3" />
                    Draft saved
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={createNewDraft}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2 transition-all duration-200 font-medium border border-gray-300"
              >
                <Plus className="w-4 h-4" />
                New Draft
              </button>

              <button
                onClick={() => setShowDrafts(true)}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg flex items-center gap-2 transition-all duration-200 font-medium border border-blue-300 relative"
              >
                <FileText className="w-4 h-4" />
                Drafts
                {drafts.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {drafts.length}
                  </span>
                )}
              </button>

              <button
                onClick={handleSaveDraft}
                disabled={isSaving || isUploading}
                className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg flex items-center gap-2 transition-all duration-200 font-medium border border-purple-300"
              >
                <Save className="w-4 h-4" />
                Save Draft
              </button>

              <button
                onClick={() => setShowPreview(true)}
                className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg flex items-center gap-2 transition-all duration-200 font-medium border border-green-300"
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>

              <button
                onClick={handleSave}
                disabled={isSaving || isUploading}
                className={`px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-200 font-medium shadow-md ${
                  isSaving || isUploading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{postId ? 'Updating...' : 'Publishing...'}</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>{postId ? 'Update Post' : 'Publish Post'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 flex gap-8">
        <div className="flex-1 min-w-0 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-all hover:shadow-lg">
            <input
              type="text"
              placeholder="Enter your post title..."
              value={post?.title || ''}
              onChange={e => {
                setPost(prevPost => ({ ...prevPost, title: e.target.value }));
                clearValidationError('title');
              }}
              className={`w-full text-3xl font-bold p-0 border-0 focus:outline-none focus:ring-0 placeholder-gray-300 ${
                validationErrors?.title ? 'text-red-500' : 'text-gray-900'
              }`}
              disabled={isSaving}
            />
            {validationErrors?.title && (
              <p className="mt-3 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {validationErrors.title}
              </p>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-200 transition-all hover:shadow-lg overflow-hidden">
            <div className="quill-wrapper">
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={post?.content || ''}
                onChange={(content: string) => {
                  setPost(prevPost => ({ ...prevPost, content }));
                  clearValidationError('content');
                }}
                placeholder="Start writing your amazing content..."
                modules={modules}
                formats={formats}
                className={`${validationErrors?.content ? 'border-red-500' : ''}`}
                readOnly={isSaving}
              />
            </div>
            {validationErrors?.content && (
              <p className="px-6 pb-4 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {validationErrors.content}
              </p>
            )}
          </div>
        </div>

        <div className="w-80 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-all hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Featured Image
            </h3>
            <ImageUpload
              onImageSelect={handleFeaturedImageUpload}
              previewUrl={post?.imageUrl ? getFullImageUrl(post.imageUrl) : undefined}
              onRemove={() => setPost(prevPost => ({ ...prevPost, imageUrl: '' }))}
              isLoading={isUploading}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-all hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
              <Tag className="w-5 h-5 text-blue-600" />
              Tags
            </h3>
            <div
              className={`flex items-center gap-2 p-3 border-2 rounded-xl mb-4 transition-all duration-200 ${
                validationErrors?.tags
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 focus-within:border-blue-500 focus-within:bg-blue-50'
              }`}
            >
              <input
                type="text"
                value={currentTag || ''}
                onChange={e => setCurrentTag(e.target.value)}
                onKeyPress={handleAddTag}
                placeholder="Type and press Enter..."
                className="flex-1 outline-none bg-transparent"
                disabled={isSaving}
              />
            </div>
            {validationErrors?.tags && (
              <p className="mb-2 text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {validationErrors.tags}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {post?.tags?.map(tag => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-medium transition-all hover:bg-blue-200"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    disabled={isSaving}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">SEO Settings</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
              </label>
              <textarea
                value={post?.excerpt || ''}
                onChange={e => {
                  setPost(prevPost => ({
                    ...prevPost,
                    excerpt: e.target.value,
                  }));
                  clearValidationError('excerpt');
                }}
                className={`w-full h-28 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                  validationErrors?.excerpt ? 'border-red-500 bg-red-50' : 'border-gray-200'
                }`}
                placeholder="Write a compelling description for search engines..."
                disabled={isSaving}
                maxLength={500}
              />
              <div className="flex justify-between items-center mt-2">
                {validationErrors?.excerpt ? (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.excerpt}
                  </p>
                ) : (
                  <span
                    className={`text-sm ${post?.excerpt?.length > 450 ? 'text-orange-500' : 'text-gray-500'}`}
                  >
                    {post?.excerpt?.length || 0}/500 characters
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .quill-wrapper .ql-container {
          min-height: 400px;
          font-size: 16px;
        }

        .quill-wrapper .ql-editor {
          min-height: 400px;
          padding: 24px;
        }

        .quill-wrapper .ql-editor.ql-blank::before {
          color: #9ca3af;
          font-style: normal;
        }

        .quill-wrapper .ql-toolbar {
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
        }

        .quill-wrapper .ql-container {
          border-bottom-left-radius: 0.75rem;
          border-bottom-right-radius: 0.75rem;
        }
      `}</style>
    </div>
  );
};
