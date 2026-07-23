// -8.useImperativeHandle - 関数コンポーネント配下のメソッドを参照する-
import { useRef } from "react";
import MyTextBox, { type MyTextBoxHandle } from "./MytextBox";

export default function ParentForm() {
  // MyTextBoxHandle型のrefを用意する(公開されているのはfocusメソッドだけ)
  const nameBoxRef = useRef<MyTextBoxHandle>(null);
  //   MyTextBoxHandleにはfocusが入っている、リモコンを作っている段階

  const handleFocusClick = () => {
    // MyTextBox内部のinputに直接フォーカスを当てる
    nameBoxRef.current?.focus();
  };

  return (
    <div>
      <MyTextBox label="名前" ref={nameBoxRef} />
      {/* これはPropsのref */}
      <button onClick={handleFocusClick}>名前欄にフォーカス</button>
    </div>
  );
}