export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  thumbnailImg: string;
  tags: string[];
  visible: boolean;
}
