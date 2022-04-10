
export default function SaveEntry(initialKey: string, project: string, valuePairs: {Value: string, Attr: string}[], typ: string, key: string) {
    let obj = {
        InitialKey: initialKey,
        ValuePairs: valuePairs,
        Typ: typ,
        Key: key,
        Project: project
    }
    return window.fetch('/saveEntry', {
        method: 'POST',
        body: JSON.stringify(obj)
    }).then(response => {

        if( response.status === 200 ) {
            document.body.setAttribute('data-key', valuePairs[0].Value)
            return true
        }
    });
}