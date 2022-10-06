import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import DataItem, { Data } from '../../components/DataItem';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function DataList() {
  const [data, setData] = useState([]);
  const [curse, setCurse] = useState(''); 

  async function searchData(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('data', {
      params: {
        curse,
      }
    });

    setData(response.data);
  }

  return (
    <div id="page-data-list" className="container">
      <PageHeader title="Ola seja bem vindo a MagniUniversity">
        <form id="curse-select" onSubmit={searchData}>
          <Select 
                name="deparment" 
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
          
          <button type="submit">
            Procurar
          </button>
        </form>
      </PageHeader>

      <main>
        {data.map((data: Data) => {
          return <DataItem key={data.id} data={data} />;
        })}
      </main>
    </div>
  )
}

export default DataList;