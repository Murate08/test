import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import './styles.css';



function DataForm() {
  const history = useHistory();

  const [curse, setCurse] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [birthday, setBirthday] = useState('');
  const [semester, setSemester] = useState('');
  const [salary, setSalary] = useState('');
  const [student_name, setStudentName] = useState('');
  const [student_birthday, setStudentBirthday] = useState('');
  const [registered, setRegistered] = useState(true);

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('data', {
      curse,
      name,
      subject,
      birthday,
      semester,
      salary,
      student_name,
      student_birthday,
      registered,
    }).then(() => {
     alert('Adicionado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    })
  }

  return (
    <div id="page-data-form" className="container">
      <PageHeader 
        title="Ola seja bem vindo a MagniUniversity."
        description="Preencha o formulario"
      />
      <main>
        <form onSubmit={handleCreateClass}>
           <fieldset>
              <legend>Dados</legend>
              <Select 
                name="curse" 
                label="Selecione o Curso"
                value={curse}
                onChange={(e) => { setCurse(e.target.value) }}
                options={[
                  { value: 'Arquitetura', label: 'Arquitetura' },
                  { value: 'Contabilidade', label: 'Contabilidade' },
                  { value: 'Gestão', label: 'Gestão' },
                  { value: 'Engenharia-informática', label: 'Engenharia Informática' },
                  { value: 'Engenharia-civil', label: 'Engenharia Civil' },
                  { value: 'Medicina', label: 'Madicina' },               
                ]}
              />
              <Select 
                name="name" 
                label="Nome Professor"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                options={[
                  { value: 'Ayad Ossaile', label: 'Ayad Ossaile' },
                  { value: 'Bruna Fontana', label: 'Bruna Fontana' },
                  { value: 'George Pedro', label: 'George Pedro' },
                  { value: 'Anastacia Fernadez', label: 'Anastacia Fernadez' },
                ]}
              />
              <Input 
                name="birthday}" 
                label="Data de nascimento do Professor"
                value={birthday}
                onChange={(e) => { setBirthday(e.target.value) }}
                type="date"
              />
              <Select 
                name="subject" 
                label="Desciplina"
                value={subject}
                onChange={(e) => { setSubject(e.target.value) }}
                options={[
                  { value: 'Matematica', label: 'Matematica' },
                  { value: 'Fisica', label: 'Fisica' },
                  { value: 'Economia', label: 'Economia' },
                  { value: 'Programacao', label: 'Programacao' },
                ]}
              />
              <Select 
                name="deparment" 
                label="Simestre"
                value={semester}
                onChange={(e) => { setSemester(e.target.value) }}
                options={[
                  { value: '1º semestre', label: '1º semestre' },
                  { value: '2º semestre', label: '2º semestre' },
                  { value: '3º semestre', label: '3º semestre' },
                  { value: '4º semestre', label: '4º semestre' },
                  { value: '5º semestre', label: '5º semestre' },
                  { value: '6º semestre', label: '6º semestre' },
                  { value: '7º semestre', label: '7º semestre' },
                  { value: '8º semestre', label: '8º semestre' },              
                ]}
              />
              <Input 
                name="salary" 
                label="Salario do professor"
                value={salary}
                onChange={(e) => { setSalary(e.target.value) }}
              />
              <Input 
                name="student_name" 
                label="Nome do Estudante"
                value={student_name}
                onChange={(e) => { setStudentName(e.target.value) }}
              />
              <Input 
                name="student_birthday" 
                label="Data de Aniversario"
                value={student_birthday}
                onChange={(e) => { setStudentBirthday(e.target.value) }}
                type="date"
              />
              <div className="button-select">
                  <button
                    type="button"
                    className={registered? 'active': ''}
                    onClick={() => setRegistered (true)}
                  >
                    Sim
                  </button>
                  <button
                    type="button"
                    className={! registered? 'active': ''}
                    onClick={() => setRegistered (false)}
                  >
                    Não
                  </button>
              </div>
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default DataForm;