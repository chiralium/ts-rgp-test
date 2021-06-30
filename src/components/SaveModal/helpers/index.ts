const generateSavingFile = (filename: string, content: string): void => {
    const a: HTMLElement = document.createElement('a');
    const encodedContent: string = encodeURIComponent(content);

    a.style.display = 'none';
    a.setAttribute('href', `data:text/json;charset=utf-8,${encodedContent}`);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

export {
    generateSavingFile,
}