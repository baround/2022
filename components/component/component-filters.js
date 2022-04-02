import styles from './component-content.module.scss'
import { useEffect, useRef, useState } from 'react';
export default function Filters({ postFilteredData, changeFiltered }) {

  const [checked, setCheckedData] = useState(new Array);
  const [filtered, setFiltered] = useState(postFilteredData);
  const handleChange = e => {
    let isChecked = e.target.checked;
    let checkedEl = checked;
    if (isChecked) {
      checkedEl.push(e.target.name)
    } else {
      let index = checkedEl.indexOf(e.target.name);
      if (index > -1) {
        checkedEl.splice(index, 1);
      }

    }
    setCheckedData(checkedEl)
  }
  const filterData = e => {
    e.preventDefault();
    const data = {
      occasione_b: e.target.occasione_b.value,
      location: e.target.location.value,
      price: e.target.price.value,
      tipo: checked
    }

    let postFiltered = postFilteredData.filter(function (locale) {
      return locale.acf.occasione_b.indexOf(data.occasione_b) > -1 && 
             locale.acf.location == data.location && 
             locale.acf.fascia_di_prezzo == data.price 
    });
    setFiltered(postFiltered)
  }
  useEffect(() => {
    changeFiltered(filtered);
  }, [filtered.length]);
  return (
    <form className={`${styles.filter}`} onSubmit={filterData}>
      <div className={`${styles.filter__row}`}>
        <div className={`${styles.filter__row__col}`}>
          <label>Occasione</label>
          <select name="occasione_b">
            <option value="4chiacchiere">4 chiacchiere</option>
            <option value="aperitivo">aperitivo</option>
            <option value="appuntamento">appuntamento</option>
            <option value="meeting">meeting</option>
          </select>
        </div>
        <div className={`${styles.filter__row__col}`}>
          <label>Coperto/fuori</label>
          <select name="location">
            <option value="aperto">All'aperto</option>
            <option value="coperto">Coperto</option>
          </select>
        </div>
        <div className={`${styles.filter__row__col}`}>
          <label>Fascia di prezzo</label>
          <div className={`${styles.filter__row__col__radio}`}>
            <span>
              <input type="radio" id="basso" name="price" value="basso" defaultChecked />
              <label htmlFor="basso">€</label>
            </span>
            <span>
              <input type="radio" id="medio" name="price" value="medio" />
              <label htmlFor="medio">€€</label>
            </span>
            <span>
              <input type="radio" id="alto" name="price" value="alto" />
              <label htmlFor="alto">€€€</label>
            </span>
          </div>
        </div>
      </div>
      <div className={`${styles.filter__row}`}>
        <label>Tipologia bar</label>
        <div className={`${styles.filter__row__box}`}>
          <span>
            <input type="checkbox" id="culturale" name="culturale" onChange={handleChange} />
            <label htmlFor="culturale">culturale</label>
          </span>
          <span>
            <input type="checkbox" id="easy" name="easy" onChange={handleChange} />
            <label htmlFor="easy">easy</label>
          </span>
          <span>
            <input type="checkbox" id="pettinato" name="pettinato" onChange={handleChange} />
            <label htmlFor="pettinato">pettinato</label>
          </span>
          <span>
            <input type="checkbox" id="vintage" name="vintage" onChange={handleChange} />
            <label htmlFor="vintage">vintage</label>
          </span>
        </div>
      </div>
      <button type="submit">Cerca</button>
    </form>
  )
} 