// -1.7- React Hook FormとMUIを連携する
import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useId } from "react";
import { Controller, useForm, type FieldErrors } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    gender: 'male' | 'female';
    memo: string;
};

export default function FormMui() {
    // 既定値を準備
    const defaultValues: FormValues = {
        name: 'Bob',
        email: 'bob@example.com',
        gender: 'male',
        memo: 'MEMO'
    };
    // フォームの初期化
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        defaultValues,
    });
    // サブミット時の処理
    const onsubmit = (data: FormValues) => {
        console.log(data);
    };
    // エラー時の処理
    const onerror = (error: FieldErrors<FormValues>) => {
        console.log(error);
    }

    const id = useId();
    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            {/* 検証ルールなどをフォームに紐付け */}
            <div>
                <TextField
                    id={`${id}-name`}
                    label="名前"
                    fullWidth
                    {...register("name", {
                        required: "名前は必須入力です",
                        maxLength: {
                        value: 20,
                        message: "名前は20文字以内にしてください",
                        },
                    })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
            </div>
            <div>
                <FormControl>
                    <FormLabel component="legend">性別:</FormLabel>
                    <Controller
                        name="gender"
                        control={control}
                        rules={{ required: '性別は必須です' }}
                        render={({ field }) => (
                            <RadioGroup {...field}>
                                <FormControlLabel value="male" control={<Radio />} label="男性" />
                                <FormControlLabel value="female" control={<Radio />} label="女性" />
                            </RadioGroup>
                        )}
                    />
                    <FormHelperText error={'gender' in errors}>
                        {errors.gender?.message}
                    </FormHelperText>
                </FormControl>
            </div>
            <div>
                <TextField
                    type="email"
                    label="メールアドレス"
                    margin="normal"
                    {...register('email', {
                        required: 'メールアドレスは必須入力です',
                        pattern: {
                            value: /^[a-z\-\d._%+]+@[a-z\-\d]+(?:\.[a-z\-\d]+)*\.[a-z]{2,}$/i,
                            message: 'メールアドレスの形式が不正です',
                        }
                    })}
                    error={'email' in errors}
                    helperText={errors.email?.message}
                />
            </div>
            <div>
                <TextField
                    label="メモ"
                    margin="normal"
                    multiline
                    {...register('memo', {
                        required: '備考は必須入力です',
                        minLength: {
                            value: 10,
                            message: '備考は10文字以上にしてください',
                        },
                    })}
                    error={'memo' in errors}
                    helperText={errors.memo?.message}
                />
            </div>
            <div>
                {/* <button type="submit">送信</button> */}
                <Button variant="contained" type="submit">送信</Button>
            </div>
        </form>
    );
}