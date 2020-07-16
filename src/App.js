import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [valueBudget, setValueBudget] = useState(0);
  const [restBudget, setRestBudget] = useState(0);
  const [show, setShow] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  useEffect(() => {
    if(createExpense){
      setExpenses([
        ...expenses,
        expense
      ]);
      const budgetLess = restBudget - expense.gasto;
      setRestBudget(budgetLess);

      setCreateExpense(false);
    }
  }, [expense, expenses, createExpense, restBudget]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {
            show ? (
              <Pregunta
                setRestBudget={setRestBudget}
                setValueBudget={setValueBudget}
                setShow={setShow}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    expenses={expenses}
                  />

                  <ControlPresupuesto 
                    valueBudget={valueBudget}
                    restBudget={restBudget}
                  />
                </div>
              </div>
            )
          }

        </div>
      </header>
    </div>
  );
}

export default App;
