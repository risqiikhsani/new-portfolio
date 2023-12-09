
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx"
import { MDXRemote } from 'next-mdx-remote/rsc'

// In the app directory, getStaticPaths is replaced with generateStaticParams
export async function generateStaticParams() {
    const blogs = getAllPostsMeta()
    const extractSlugs = (blogs: any[]) => {
        return blogs.map((blog) => ({ slug: blog.slug }));
    };
    const slugsArray = extractSlugs(await blogs);
    return slugsArray
}

const getPageContent = async (slug: string) => {
    const { meta, content } = await getPostBySlug(slug)
    return { meta, content }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { meta } = await getPageContent(params.slug) as any
    return { title: meta.title }
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { content } = await getPageContent(params.slug)

    return (
        <>
            <div className="dark:prose-invert prose prose-slate lg:prose-xl mx-auto">
                {content}
            </div>
        </>
    )
}