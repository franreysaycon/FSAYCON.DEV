export interface BlogMetaData {
    title: string;
    date: string;
    slug: string;
    duration: string;
    preview: string;
}

export interface BlogPageProps {
    content: string | null;
    data: BlogMetaData;
}

export interface BlogAppProps {
    content: string | null;
    title: string;
    date: string;
    duration: string;
}