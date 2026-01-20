/**
 * Apply different styles over a paragraph according to checked radio button.
 */

let paragraph = document.getElementById("PAR");

function ChangeFont(fontFamily) {
    paragraph.style.fontFamily = fontFamily;
}

function ChangeAlign(textAlign) {
    paragraph.style.textAlign = textAlign;
}

function ChangeHeight(lineHeight) {
    paragraph.style.lineHeight = lineHeight;
}

function ChangeLSpace(letterSpacing) {
    paragraph.style.letterSpacing = letterSpacing;
}

function ChangeIndent(indentValue) {
    paragraph.style.textIndent = indentValue;
}

function ChangeTransform(transformation) {
    paragraph.style.textTransform = transformation;
}

function ChangeDecorate(decoration) {
    paragraph.style.textDecoration = decoration;
}

function ChangeBorder(borderType) {
    paragraph.style.borderStyle = borderType;
}

function ChangeBorderColor(color) {
    paragraph.style.borderColor = color;
}
