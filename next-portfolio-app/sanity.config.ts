import { defineConfig } from "sanity";
//This is for using our desk studio at all
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({

    projectId: "gs0km344",

    dataset: "production",

    title: "My Portfolio",

    apiVersion: "2021-03-25",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: { types: schemas }, 

});

export default config;