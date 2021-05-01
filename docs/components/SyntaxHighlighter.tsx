import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";

function MySyntaxHighlighter({ children }: any) {
  return (
    <SyntaxHighlighter language="javascript" style={coy}>
      {children}
    </SyntaxHighlighter>
  );
}

export default MySyntaxHighlighter;
