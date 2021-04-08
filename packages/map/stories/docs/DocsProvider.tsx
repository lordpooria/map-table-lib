import React, { PureComponent } from "react";
import PropTypes from "prop-types";
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

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
