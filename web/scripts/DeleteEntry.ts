export default function DeleteEntry(i: number) {
    window.fetch('/delete/entry', {
        method: 'POST',
        body: JSON.stringify({Entry:i})
    }).then(response => console.log(response))
}