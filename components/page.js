import { useEffect, useRef, useState } from 'react';
import Intro from './component/component-intro'
import IntroLocale from './component/component-intro-locale';
import Content from './component/component-content'
import Picture from './component/component-picture'
import Gallery from './component/component-gallery'
import Video from './component/component-video'
import Banner from './component/component-banner'
import Attivita from './component/component-attivita'
import Summary from './component/component-summary'
import Map from './component/component-map'

export default function Page({ pageData, pageType }) {
  var coverImage = null;
  coverImage = pageData.acf.immagine_di_copertina;
  const [mapObject, setMapObject] = useState(null);
  return (
    <>
      {(pageType == 'locali') ? (
        <IntroLocale coverImage={coverImage} data={pageData} title={pageData.title.rendered} />
      ) : null}
      {(pageData.acf.contenuto.length > -1) ? (
        pageData.acf.contenuto.map((block, index) => {
          if (block.acf_fc_layout == 'introduzione') {
            if (pageType == 'itinerari') {
              return (
                <div key={index}>
                  <Intro coverImage={coverImage} data={block} title={pageData.title.rendered} />
                  <Map setMapObject={setMapObject} postData={pageData} pageType={pageType} />
                  <Summary data={pageData} />
                </div>
              )
            } else {
              return (
                <>
                  <Intro key={index} coverImage={coverImage} data={block} title={pageData.title.rendered} />
                  <Map setMapObject={setMapObject} postData={pageData} pageType={pageType} />
                </>
              )
            }
          } else if (block.acf_fc_layout == 'testo') {
            return (
              <Content key={index} data={block} />
            )
          } else if (block.acf_fc_layout == 'attivita') {
            return (
              <Attivita key={index} data={block} />
            )
          } else if (block.acf_fc_layout == 'immagine') {
            return (
              <Picture key={index} data={block} />
            )
          } else if (block.acf_fc_layout == 'galleria_immagini') {
            return (
              <Gallery key={index} data={block} />
            )
          } else if (block.acf_fc_layout == 'video') {
            return (
              <Video key={index} data={block} />
            )
          } else if (block.acf_fc_layout == 'banner') {
            return (
              <Banner key={index} data={block} />
            )
          }
        })
      ) : null}
    </>
  )
} 