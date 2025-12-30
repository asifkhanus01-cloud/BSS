import React from "react";
import { useParams } from "react-router-dom";
import { getBlogPostBySlug } from "../src/data/content";
import { BlogPostHeader1 } from "./components/BlogPostHeader1";
import { Content30 } from "./components/Content30";
import { Cta53 } from "./components/Cta53";
import { Blog36 } from "./components/Blog36";

export default function Page() {
    const { slug } = useParams();
    const blogPost = getBlogPostBySlug(slug);

    if (!blogPost) {
        return (
            <div className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container text-center">
                    <h1 className="mb-4 text-4xl font-bold">Blog Post Not Found</h1>
                    <p className="mb-8 text-text-secondary">The blog post you're looking for doesn't exist.</p>
                    <a href="/blog" className="text-school-blue hover:underline">Back to Blog</a>
                </div>
            </div>
        );
    }

    return (
        <div>
            <BlogPostHeader1 blogPost={blogPost} />
            <Content30 blogPost={blogPost} />
            <Cta53 />
            <Blog36 excludeSlug={blogPost.slug} />
        </div>
    );
}
