
export default function SaveEntry(initialKey: string, valuePairs: {Value: string, Attr: string}[], typ: string) {
    let obj = {
        InitialKey: initialKey,
        ValuePairs: valuePairs,
        Typ: typ,
    }
    document.body.setAttribute('data-key', valuePairs[0].Value)
    window.fetch('/saveEntry', {
        method: 'POST',
        body: JSON.stringify(obj)
    }).then(response => {
        console.log(response);
    });
}