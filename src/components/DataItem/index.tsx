import React, {useState} from 'react';



import './styles.css';

export interface Data {
  id: number;
  curse:string;
  teac: string;
  name:string;
  subject:string;
  birthday:string;
  semester:string;
  salary:string;
  student_name:string;
  student_birthday:string;
  registered:string;
}

interface TeacherItemProps {
  data: Data;
}

const ContactItem: React.FC<TeacherItemProps> = ({ data }) => {

  const [registered, setRegistered] = useState<Data>();

  return (
    <div className='card'>
      <article className="job-item">
        <h4>Dados do aluno</h4>
        <p >Nome do Aluno: {data.student_name}</p>
        <p >Aniversario do aluno: {data.student_birthday}</p>
        <p >Semestre: {data.semester} Semestre</p> 

        {registered?.registered ? (
          <p>
            Aluno Registado
          </p>
          ) : (
            <p> 
              Aluno não Registado
            </p>
          )} 
    </article>

    <footer>
          <h4>Dados do professor</h4>
          <p>Nome do Professor:{data.name}</p>
          <p>Data de nascimeto: {data.birthday}</p>
          <p>Disciplina:{data.subject}</p>
    </footer>
    </div>
  );
}

export default ContactItem;
