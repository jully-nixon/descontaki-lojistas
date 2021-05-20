import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Input from '../../components/Input';
import CouponReport from '../../components/CouponReport';
import SearchIcon from '@material-ui/icons/Search';
import { Chart } from "react-google-charts";
import Information from '../../MockJson';

const options = [
    { key: 1, text: 'Cupons Ativados', value: 1 },
    { key: 2, text: 'Notas Cadastradas', value: 2 },
    { key: 3, text: 'Perfis de Consumidores', value: 3 },
]

const initialFilterState = {
    type: 'Cupons Ativados',
    startDate: '',
    endDate: '',
}

const Reports = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#dad8d8'
    }, []);

    const [filter, setFilter] = useState(initialFilterState);
    const [optionsGraphic, setOptionsGraphic] = useState({
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: '12'
    });
    const [dataAge, setDataAge] = useState([
        ['Idades', 'Quantidade'],
        ['Maior de 18', 100],
        ['Maior que 40', 80],
        ['Menor de 18', 50],
    ]);
    const [dataSchedule, setdataSchedule] = useState([
        ['schedules', 'Quantidade'],
        ['Manhã', 30],
        ['Tarde', 40],
        ['Noite', 100],
    ])

    const getFilter = (newValue) => {
        setFilter(filter => ({ ...filter, ...newValue }));
    }

    const filterReports = () => {
        console.log(filter.type)
    }
    const dataCupons = Information.map((data) => {
        return (
            <CouponReport name={data.name} active={data.active} discount={data.discount} />
        );
    })

    return (
        <div className="reports">
            <Header />
            <h1 className="reports--title">Relatórios</h1>
            <hr />
            <div className="reports--select">
                <label>Tipo de pesquisa</label>
                <Dropdown options={options} selection defaultValue={options[0].value}
                    onChange={e => getFilter({ type: e.target.outerText })} />
            </div>
            <div className="reports--timeCourse">
                <label>Período</label>
                <Input type="date" onChange={e => getFilter({ startDate: e.target.value })} />
                <label id="timeCourse">a</label>
                <Input type="date" onChange={e => getFilter({ endDate: e.target.value })} />
                <SearchIcon className="reports--search" onClick={filterReports} />
            </div>
            <hr />
            {filter.type === 'Notas Cadastradas' &&
                <div className="reports--registeredNotes">
                    <label>Notas Cadastradas</label>
                    <h2>300</h2>
                    <label>Valor total: <strong>R$500</strong></label>
                </div>
            }
            {filter.type === 'Cupons Ativados' &&
                <div className="reports--activatedCoupons">
                    {dataCupons}
                </div>
            }
            {filter.type === 'Perfis de Consumidores' &&
                <div className="reports--graphic">
                    <strong>Idade</strong>
                    <Chart
                        width={'400px'}
                        height={'250px'}
                        chartType="PieChart"
                        data={dataAge}
                        options={optionsGraphic}
                    />
                    <strong>Horário de visita</strong>
                    <Chart
                        width={'400px'}
                        height={'250px'}
                        chartType="PieChart"
                        data={dataSchedule}
                        options={optionsGraphic}
                    />
                </div>
            }

        </div>
    );

}

export default Reports;