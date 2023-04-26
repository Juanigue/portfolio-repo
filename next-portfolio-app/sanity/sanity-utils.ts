import { createClient, groq } from "next-sanity";

export async function getProjects(){
    const client = createClient({

        projectId: "gs0km344",

        dataset: "production",
    
        apiVersion: "2021-03-25",

    });

    //creating groq query
    return client.fetch(
        groq`*[_type == "project"]{
            _id,

            _createdAt,

            name,  

            "slug": slug.current,
            
            "image": image.asset->url,

            url,

            content
        }`
    );

}