'use client'
import { useUnit } from 'effector-react'
import { AnimatePresence, motion } from 'framer-motion'

import Header from '@/components/modules/Header/Header'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileNavbar from '@/components/modules/MobileNavbar/MobileNavbar'
import { $searchModal } from '@/context/modals'
import SearchModal from '@/components/modules/Header/SearchModal'
import { handleCloseSearchModal } from '@/lib/utils/common'
import Footer from '@/components/modules/Footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800)
  const searchModal = useUnit($searchModal)

  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <AnimatePresence>
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 102 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SearchModal />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`header__search-overlay ${
          searchModal ? 'overlay-active' : ''
        }`}
        onClick={handleCloseSearchModal}
      />
      <Footer />
    </>
  )
}

export default Layout
