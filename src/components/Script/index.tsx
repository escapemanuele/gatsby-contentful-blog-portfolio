import * as React from 'react';
import ReactScriptTag from 'react-script-tag';

type ScriptProps = {
  innerHTMLCode?: string;
} & React.DetailedHTMLProps<
  React.ScriptHTMLAttributes<HTMLScriptElement>,
  HTMLScriptElement
>;

const Script = ({ innerHTMLCode = '', ...otherProps }: ScriptProps) => {
  return (
    <ReactScriptTag
      {...otherProps}
      isHydrating={true}
      dangerouslySetInnerHTML={{ __html: innerHTMLCode }}
    />
  );
};

export default Script;
