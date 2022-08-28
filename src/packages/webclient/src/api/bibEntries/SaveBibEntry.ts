import {BibEntry} from "@/api/bibEntries/BibEntry";

export default async function SaveBibEntry(jsonObj: string): Promise<Response> {


    return await fetch('/saveEntry', {
        method: 'POST',
        body: jsonObj
    });
}
