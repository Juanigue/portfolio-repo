import { url } from "inspector";
import { type } from "os";
import { title } from "process";

const project = {

    name:  'project',

    title: 'Projects',

    type: 'document',

    fields: [
        { 
            name: 'title',

            type: 'string',

            title: 'Name',

        },
        { 
            name: 'slug',

            title: 'Slug',

            type: 'slug',

            options: { source: 'name'}
        },
        {
            name: 'image',

            title: 'Image',

            type: 'image',

            options: { hotspot: true },

            fields: [
                {
                name: 'alt',

                title: 'Alt',

                type: 'string',

                },
            ],
        },
        {
            name: 'url',

            title: 'URL',

            type: 'url',

        },
        {
            name: 'content',

            title: 'Content',

            type:  'array',

            of: [{ type: "block" }],

        },

    ],
};

export default project;