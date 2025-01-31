import React from "react"
import configs from "../../site-config"
import Img from "gatsby-image"

const Appinfo = ({ data }) => {
  return (
    <div className="appInfo">
      <div className="appIconShadow">
        <svg width="0" height="0">
          <defs>
            <clipPath id="shape120">
              <path
                id="shape"
                d="M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z"
                transform="translate(-6701 -458)"
                filter="url(#f1)"
              />
            </clipPath>
          </defs>
        </svg>
        <Img
          fluid={data.appIconLarge.childImageSharp.fluid}
          className="appIconLarge"
        />
      </div>
      <div className="appNamePriceContainer">
        <h1 className="appName">{configs.app_name}</h1>
        <h2 className="appPrice">{configs.app_price}</h2>
      </div>
      <div className="appDescriptionContainer">
        <p className="appDescription">{configs.app_description}</p>
      </div>
      <div className="downloadButtonsContainer">
        {configs.playstore_link && (
          <a className="playStoreLink" href={configs.playstore_link}>
            <Img
              fixed={data.playStore.childImageSharp.fixed}
              className="playStore"
            />
          </a>
        )}
        {configs.appstore_link && (
          <a className="appStoreLink" href={configs.appstore_link}>
            <Img
              fixed={data.appStore.childImageSharp.fixed}
              className="appStore"
            />
          </a>
        )}
      </div>
      <div className="appDescriptionContainer">
        <button>Download</button>
      </div>
    </div>
  )
}
export default Appinfo
