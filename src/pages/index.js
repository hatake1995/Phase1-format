import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import { db } from '../config/firebase';
import { addDoc, collection, onSnapshot, doc, setDoc } from 'firebase/firestore';

export default function Home() {

    //iswasLeaningには　trueはい　or　falseいいえ　が入る
    const [isLearning, setIsLearning] = useState(null);
    const [wasLearning, setWasLearning] = useState(null);

    //質問isLearningに変化が起きたら発動、各情報をeに格納↓
    const handleIsLearningChange = e => {
        setIsLearning(e.target.value === "true")
    }  //なんでtrue？falseも入るのになんの比較なの？↑

    const handleWasLearningChange = e => {
        setWasLearning(e.target.value === "true")
    }

    //色々インポートされたものを定義して使えるようにする
    const { register, handleSubmit, formState: { errors }, control } = useForm()
    //registerはフォームの値をuseFormに渡すための関数
    //handleSubmitはフォームが送信された時に呼び出される関数をラップするための関数でonSubmitを呼び出す
    //fromStateは現在のフォーム状態に関する情報ｵﾌﾞｼﾞｪｸﾄ
    //errorsは各フィールドのバリデーションエラー
    //controlはMaterial-UIとReact Hook Formを統合するもの


    //フォームが送信されたら発動↓
    const onSubmit = (data) => {
        console.log(data)
        addDoc(collection(db, "answers"), {
            birthdate: data.birthdate,
            name: data.name,
            isLeaning: data.isLearning,
            wasLeaning: data.wasLearning

        })
    }  //dataは各フォームの値が入ってる


    return (
        <>
            <Container>
                <h1>プログラミング学習に関するアンケート</h1>

                {/* onSubmit(フォーム送信)されると、
                handleSubmitが発動し、eに情報を集め、集めた情報が
                バリデーションに引っかからなければ
                関数onSubmitを発動させる */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>

                        {/* htmlForは下のname='name'と紐づいてる */}
                        <label htmlFor='name'> 名前を入力してください</label>

                        <Controller

                            //フォームフィールドの名前
                            name="name"

                            //フォームフィールドの初期値
                            defaultValue=""

                            //ControllerとReact Hook Formを紐づけてる
                            control={control}

                            //現在のフィールド値を表示し、ユーザーがその値を変更したときに
                            //それを追跡するテキスト入力フィールドを表示するという動作を指定している
                            //現在のフィールド値(value)とその値を変更するための関数onChangeを受け取る
                            render={({ field: { value, onChange } }) =>
                                <Input value={value} onChange={onChange} />}
                        //Material-UIのInputコンポーネント。
                        //value={value}現在のフィールド値
                        //onChange={onChange}値が変更された時に呼び出される関数を指定している
                        //ユーザーが入力するとonChange関数によって値が更新される
                        />
                    </div>
                    <div>
                        <label htmlFor="birth">生年月日を入力してください</label>
                        <Controller
                            name="birthdate"
                            defaultValue=""
                            control={control}
                            //required: trueは入力必須のﾊﾞﾘﾃﾞｰｼｮﾝ、入力がない場合errorsにエラー情報が行く
                            rules={{ required: true, pattern: /^[0-9]{8}$/ }}
                            render={({ field: { value, onChange } }) =>
                                <Input value={value} onChange={onChange} />}
                        />
                        {   //生年月日入力フォームに関するﾊﾞﾘﾃﾞｰｼｮﾝエラーを表すerrors.birthdate
                            //エラーの種類がrequired(入力必須)であることをチェックするerrors.birthdate.type
                            errors.birthdate && errors.birthdate.type === "required" ?
                                <span>回答必須です</span> : null  //←のnullはエラーがない時は表示しないという意味
                        }
                        {
                            errors.birthdate && errors.birthdate.type === "pattern" ?
                                <span>整数8桁で入力</span> : null
                        }
                    </div>
                    <div>
                        <span>現在プログラミング学習をしていますか</span>

                        <input
                            id='isLearning1'
                            {...register("isLearning", { required: true })}
                            name='isLearning'
                            type='radio'
                            value={true}
                            onChange={handleIsLearningChange}
                        //ユーザーがチェックボックスをいじるとonChangeが発動し
                        //handleIsLearningChange関数にデータが渡され、実行される
                        />
                        <label htmlFor='isLearning1'>はい</label>

                        <input
                            id='isLearning2'
                            {...register("isLearning", { required: true })}
                            name='isLearning'
                            type='radio'
                            value={false}
                            onChange={handleIsLearningChange}
                        />
                        <label htmlFor='isLearning2'>いいえ</label>

                        <input
                            id='isLearning3'
                            {...register("isLearning", { required: true })}
                            name='isLearning'
                            type='radio'
                            value={undefined}
                            onChange={handleIsLearningChange}
                        />
                        <label htmlFor='isLearning3'>わからない</label>

                        {
                            errors.isLearning &&
                            <span>回答必須です</span>
                        }
                    </div>


                    <div>
                        <span>これまでにプログラミング学習をしたことがありますか</span>

                        <input
                            id='wasLearning1'
                            {...register("wasLearning", { required: true })}
                            name='wasLearning'
                            type='radio'
                            value={true}
                            onChange={handleWasLearningChange}
                        />
                        <label htmlFor='wasLearning1'>はい</label>

                        <input
                            id='wasLearning2'
                            {...register("wasLearning", { required: true })}
                            name='wasLearning'
                            type='radio'
                            value={false}
                            onChange={handleWasLearningChange}
                        />
                        <label htmlFor='wasLearning2'>いいえ</label>

                        <input
                            id='wasLearning3'
                            {...register("wasLearning", { required: true })}
                            name='wasLearning'
                            type='radio'
                            value={undefined}
                            onChange={handleWasLearningChange}
                        />
                        <label htmlFor='wasLearning3'>わからない</label>

                        {
                            errors.wasLearning &&
                            <span>回答必須です</span>
                        }
                    </div>

                    {/* ||はどちらかがtrueの場合、trueとなる */}
                    {/* &&は左側の条件がtrueの場合右側の処理を行う */}
                    {(isLearning || wasLearning) && (
                        <div>
                            <span>これまでに学んだプログラミング言語を教えてください</span>
                        </div>
                    )}
                    <input type="submit" value="提出する" />
                </form>
            </Container>
        </>
    )
}