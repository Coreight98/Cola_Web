import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

export default function PostView() {
  return <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />;
}
