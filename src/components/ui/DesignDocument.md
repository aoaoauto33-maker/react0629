# 設計書：イベント参加者管理アプリ

## 型定義（たたき台）

```ts
type Participant = {
    id: string;
    name: string;
    email: string;
    eventName: string;
    status: "scheduled" | "attended" | "cancelled";
    createdAt: string;
};
```

---

## コンポーネント構成（たたき台）

* ParticipantCard（Props: participant, onDelete, onStatusChange）
* SearchFilter
* ParticipantForm（React Hook Form + Yup）
* App（state管理）

---

## state設計（検討ポイントのみ提示）

* 参加者一覧のstateはAppで管理するか、専用のカスタムフックに切り出すかは要検討。
* 検索キーワード・参加状況フィルターをstateで管理する。
* フィルター後の一覧は都度計算するか、別stateとして保持するかは要検討。

---

## Yupバリデーション設計（検討ポイントのみ提示）

### name

* 必須
* 1〜30文字

### email

* 必須
* メールアドレス形式

### eventName

* 必須
* 1〜50文字

### status

* 必須
* 「scheduled」「attended」「cancelled」のいずれか

---

## 画面構成

### 参加者登録フォーム

入力項目

* 名前
* メールアドレス
* イベント名
* 参加状況
* 登録ボタン

### 検索・フィルター

* 名前検索
* 参加状況フィルター

### 参加者一覧

表示項目

* 名前
* メールアドレス
* イベント名
* 参加状況
* 登録日時
* 削除ボタン
* 参加状況変更ボタン（またはセレクトボックス）

---

## 検討事項

* メールアドレスの重複登録を許可するか。
* 同じイベントへ複数回参加登録できるようにするか。
* 登録日時の表示形式（YYYY/MM/DD HH:mm など）。
* 削除前に確認ダイアログを表示するか。
