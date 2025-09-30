import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/projects"
    }),
    schema: z.object({
        title: z.string(),
        metaTitle: z.string(),
        metaDescription: z.string(),
        images: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

const services = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/services"
    }),
    schema: z.object({
        title: z.string(),
        metaTitle: z.string(),
        metaDescription: z.string(),
        images: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

export const collections = {projects, services};