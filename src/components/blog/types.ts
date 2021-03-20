export interface BlogMetaData {
  title: string;
  date: string;
  slug: string;
  duration: string;
  tags: string[];
  description: string;
}
export interface BlogItem {
  content: string | null;
  data: BlogMetaData;
}

export interface BlogAppProps {
  content: string | null;
  title: string;
  date: string;
  duration: string;
}
