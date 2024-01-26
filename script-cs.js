// 在body标签末尾添加以下脚本
function copyText() {
    // 获取要复制的文本
    const textToCopy = document.getElementById('textToCopy');

    // 创建临时文本区域以方便复制
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy.innerText;
    document.body.appendChild(textarea);

    // 选择文本区域中的文本
    textarea.select();
    document.execCommand('copy');

    // 删除临时文本区域
    document.body.removeChild(textarea);

    // 显示复制提示
    const copyPrompt = document.getElementById('copyPrompt');
    copyPrompt.style.display = 'block';

    // 2秒后隐藏复制提示（根据需要调整）
    setTimeout(function() {
        copyPrompt.style.display = 'none';
    }, 2000);
}