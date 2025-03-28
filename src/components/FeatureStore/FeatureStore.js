import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Loader from '../../common/Loader/Loader'
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs'
import PageActionsMenu from '../../common/PageActionsMenu/PageActionsMenu'
import ContentMenu from '../../elements/ContentMenu/ContentMenu'
import YamlModal from '../../common/YamlModal/YamlModal'
import { ConfirmDialog } from 'igz-controls/components'

import {
  FEATURE_SETS_TAB,
  FEATURE_STORE_PAGE,
  FEATURE_VECTORS_TAB,
  FEATURES_TAB
} from '../../constants'
import { createFeatureSetTitle, createFeatureVectorTitle, tabs } from './featureStore.util'
import { useYaml } from '../../hooks/yaml.hook'

import './featureStore.scss'

export const FeatureStoreContext = React.createContext({})

const FeatureStore = () => {
  const [featureSetsPanelIsOpen, setFeatureSetsPanelIsOpen] = useState(false)
  const [createVectorPopUpIsOpen, setCreateVectorPopUpIsOpen] = useState(false)
  const [confirmData, setConfirmData] = useState(null)
  const [convertedYaml, toggleConvertedYaml] = useYaml('')
  const location = useLocation()
  const featureStore = useSelector(store => store.featureStore)

  const handleActionsMenuClick = () => {
    return location.pathname.includes(FEATURE_SETS_TAB)
      ? setFeatureSetsPanelIsOpen(true)
      : setCreateVectorPopUpIsOpen(true)
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="content__header">
          <Breadcrumbs />
          <PageActionsMenu
            actionsMenuHeader={
              location.pathname.includes(FEATURE_SETS_TAB)
                ? createFeatureSetTitle
                : createFeatureVectorTitle
            }
            onClick={handleActionsMenuClick}
            showActionsMenu={
              location.pathname.includes(FEATURE_SETS_TAB) ||
              location.pathname.includes(FEATURE_VECTORS_TAB)
            }
          />
        </div>
        <div className="content content_with-menu">
          <ContentMenu
            activeTab={
              location.pathname.includes(FEATURE_SETS_TAB)
                ? FEATURE_SETS_TAB
                : location.pathname.includes(FEATURE_VECTORS_TAB)
                ? FEATURE_VECTORS_TAB
                : FEATURES_TAB
            }
            screen={FEATURE_STORE_PAGE}
            tabs={tabs}
          />
          <div className="table-container">
            <FeatureStoreContext.Provider
              value={{
                setConfirmData,
                createVectorPopUpIsOpen,
                featureSetsPanelIsOpen,
                setFeatureSetsPanelIsOpen,
                setCreateVectorPopUpIsOpen,
                toggleConvertedYaml
              }}
            >
              <Outlet />
            </FeatureStoreContext.Provider>
            {(featureStore.loading ||
              featureStore.entities.loading ||
              featureStore.features.loading) && <Loader />}
          </div>
        </div>
      </div>
      {confirmData && (
        <ConfirmDialog
          cancelButton={{
            handler: confirmData.rejectHandler,
            label: confirmData.btnCancelLabel,
            variant: confirmData.btnCancelVariant
          }}
          closePopUp={confirmData.rejectHandler}
          confirmButton={{
            handler: () => confirmData.confirmHandler(confirmData.item),
            label: confirmData.btnConfirmLabel,
            variant: confirmData.btnConfirmVariant
          }}
          header={confirmData.header}
          isOpen={confirmData}
          message={confirmData.message}
        />
      )}
      {convertedYaml.length > 0 && (
        <YamlModal convertedYaml={convertedYaml} toggleConvertToYaml={toggleConvertedYaml} />
      )}
    </>
  )
}

export default FeatureStore
