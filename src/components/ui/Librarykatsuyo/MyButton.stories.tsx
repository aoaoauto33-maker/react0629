// ストーリーの確認
// import MyButton from "./MyButton";

// // 基本情報を宣言
// export default {
//     title: 'MyApp/MyButton',
//     component: MyButton,
//     // storybookにこのコンポーネントを登録しますと自己紹介をしている
// };

// // Indexストーリーを追加
// export const Index = {
    
//     render: () => <MyButton
//         primary
//         size="medium"
//         label="ボタン"
//         onClick={() => { console.log('Hello Storybook!!'); }}
//     />
// };

// // Whiteストーリーを追加
// export const White = {
//     render: () => <MyButton
//         size="small"
//         label="ボタン"
//         backgroundColor="#fff"
//     />
// };




// 基本情報を増やしたVer
import type { Meta, StoryObj } from '@storybook/react-vite';
// import typeは型だけ読み込んでいる
// storybookが用意している型、reactでいうuseStateみたいな感じ
import MyButton from "./MyButton";


const meta: Meta<typeof MyButton> = {
    title: 'MyApp/MyButton',
    // storybookのメニューの名前
    component: MyButton,
    args: {
        primary: false,
        size: 'medium',
        label: 'Button',
    },
    // 初期値をargsで決める　args=値を設定する
    argTypes: {
        backgroundColor: {
            control: 'color',
            description: 'ボタンの背景色を指定します'
        },
        size: {
            control: 'inline-radio',
            option: ['small','medium','large'],
        },
        onClick: { action: 'clicked'},
    },
    // argTypes=変えたいものがある場合に使う
        decorators: [
            (Story: React.ComponentType) => (
                // React.ComponentTypeという型をStoryに入れてる
                <div style={{padding: '2rem', display: 'flex', justifyContent: 'center'}}>
                    <Story />
                </div>
            ),
        ],
        // decorators=ボタンの位置を決めている お皿を追加する
        parameters: {
            layout: 'centered',
            backgrounds: {
                default: 'light',
            },
        },
        // parameters=storybookの表示方法　テーブルの真ん中にお皿を置く
    };


    export default meta;
    type Story = StoryObj<typeof MyButton>;
    // StoryObj=storybookが用意しているストーリーを描くための型
    // MyButtonで決めた型を入れてそれがStoryという型

    export const Index: Story = {
        args: {
            primary: true,
            label: 'ボタン',
        },
    };

    export const White: Story ={
        args: {
            size: 'small',
            backgroundColor: '#fff',
        },
    };
