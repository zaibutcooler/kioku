// import React, { useMemo, useState } from "react";
// import { createEditor, Node } from "slate";
// import { Slate, Editable, withReact } from "slate-react";

// const DiaryEditor: React.FC = () => {
//   const editor = useMemo(() => withReact(createEditor()), []);
//   const [value, setValue] = useState<Node[]>([
//     { type: "paragraph", children: [{ text: "" }] },
//   ]);

//   const handleChange = (newValue: Node[]) => {
//     setValue(newValue);
//   };

//   return (
//     <Slate editor={editor} value={value} onChange={handleChange}>
//       <Editable />
//     </Slate>
//   );
// };

// export default DiaryEditor;

//still left to use text area
