// import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./Show.css";

export default function Show({ data }) {  
  return (
    <ul className="ul">
      {data.map((e) => (
        <li>
          <Markdown
            remarkPlugins={[remarkGfm]}
            children={e.body}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={nightOwl}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </li>
      ))}
    </ul>
  );
}

const customStyle = {
  ...base16AteliersulphurpoolLight,
  'code[class*="language-"]': {
    ...base16AteliersulphurpoolLight['code[class*="language-"]'],
    padding: '0.5rem',
    fontSize: '1.5rem',
    backgroundColor: 'black',
    borderRadius: '0.5rem',
  },
  'pre[class*="language-"]': {
    ...base16AteliersulphurpoolLight['pre[class*="language-"]'],
    padding: '0.5rem',
    fontSize: '1.5rem',
    backgroundColor: 'black',
    borderRadius: '0.5rem',
  },
};