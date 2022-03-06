import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';

// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

export default function PostWriter() {
  return (
    <Editor
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}
