import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";

import ReactMarkdown from "react-markdown";

export const DocsProvider = ({
  MDFile,
  children,
}: {
  MDFile: any;
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <ReactMarkdown source={MDFile} renderers={{ code: CodeBlock }} />
    </>
  );
};

function CodeBlock({ language = null, value }: any) {
  return (
    <SyntaxHighlighter language="js" style={coy}>
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
