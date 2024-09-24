document.getElementById("removeCommentsBtn").addEventListener("click", function() {
    const code = document.getElementById("inputCode").value;
    const singleLineComments = /\/\/.*$/gm;
    const multiLineComments = /\/\*[\s\S]*?\*\//g;
    const hashComments = /#.*$/gm;
    const htmlComments = /<!--[\s\S]*?-->/g; 

    const codeWithoutComments = code
        .replace(singleLineComments, "")
        .replace(multiLineComments, "")
        .replace(hashComments, "")
        .replace(htmlComments, "");

    document.getElementById("outputCode").value = codeWithoutComments.trim();
});