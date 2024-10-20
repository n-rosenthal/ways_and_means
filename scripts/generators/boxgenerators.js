
const boxes = [
    "box-tmpl",
]

function wrapBox(boxObject, content) {
    return `<div class="boxes ${boxObject}">${content}</div>`;
}