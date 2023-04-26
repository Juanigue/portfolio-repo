"use client"; //This is to tell next to render on the browser on the client, not the server

import config from '@juanigue/sanity.config';
import { NextStudio } from 'next-sanity/studio';


export default function AdminPage() {
  return <NextStudio config={config} />;
}
