import {useEffect, useRef, useState} from 'react';
import LocatorButton from '../component/component-locator-button';
import Map from '../component/component-map';
import styles from '../homepage/locali.module.scss'

export default function Locali({ content, postData }){
  const [mapObject, setMapObject] = useState(null);
  return (
    <section className={styles.locali}>
      <div className={styles.locali__wrap}>
        <div className={`${styles.locali__row} ${styles.locali__row_header}`}>
          <h2> 
            <img src="/images/icon-locali-white.svg" />
            {content.titolo}
          </h2>
          <div className={`${styles.locali__row_header__locator}`}>
            <span>oppure</span>
            <LocatorButton mapObject={mapObject} />
          </div>
        </div>
      </div>


      <Map setMapObject={setMapObject} postData={postData} pageType='homepage' />

    </section>
  ); 
} 
