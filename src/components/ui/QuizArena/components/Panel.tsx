// src/components/ui/QuizArena/components/Panel.tsx

type Props = {
  title:string;
  children:React.ReactNode;
};

export default function Panel({title, children}:Props){
    return (
    <section>
        <h2>QuizArena {title}</h2>
        {children}
    </section>
  );
}