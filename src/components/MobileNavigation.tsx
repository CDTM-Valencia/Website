import { motion, type Variants } from 'framer-motion';
import { applicationsAreClosed } from '@/lib/utils';
import { applicationsNotYetOpen } from '@/lib/utils';
import PaddedSection from './paddedSection';
import ApplicationsClosedDialog from './ApplicationsClosedDialog';
import { useState } from 'react';

interface SubMenuItem {
  id: string;
  label: string;
  url: string;
}

interface MenuItem {
  id: string;
  label: string;
  submenu?: SubMenuItem[];
}

interface Menu {
  items: MenuItem[];
}

interface MobileNavigationProps {
  menu: Menu;
  onItemClick: () => void;
  isOpen: boolean;
}

const MobileNavigation = ({
  menu,
  onItemClick,
  isOpen,
}: MobileNavigationProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const menuVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: 300,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItems = menu.items.map((item) => (
    <div key={item.id} className="w-full">
      {item.submenu && (
        <div className="flex flex-col items-center w-full">
          {item.submenu.map((subItem, index) => (
            <div key={subItem.id} className="w-full">
              <a
                href={subItem.url}
                onClick={onItemClick}
                className="text-base text-springText/80 hover:text-springBlue transition-colors duration-200 font-medium text-center block py-2 px-4 rounded-lg hover:bg-springBlue/5"
              >
                {subItem.label}
              </a>
              {index < item.submenu!.length - 1 && (
                <div className="w-full h-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  ));

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-18 left-0 right-0 z-30 bg-black/20 md:hidden"
          style={{
            height: '100vh',
            minHeight: '100vh',
          }}
          onClick={onItemClick}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className="fixed top-18 right-0 h-[365px] w-4/5 max-w-sm z-40 bg-white shadow-lg md:hidden overflow-hidden rounded-l-lg"
      >
        <div className="h-full overflow-hidden">
          <div className="flex h-full flex-col pt-2">
            <div className="flex flex-1 flex-col items-center justify-start pt-0">
              {menuItems}
            </div>

            <div className="mt-1 pb-2 px-2 flex-shrink-0">
              <div className="w-full h-px bg-gray-200 mb-2"></div>
              <button
                onClick={() => {
                  if (applicationsNotYetOpen() || applicationsAreClosed()) {
                    setIsDialogOpen(true);
                  } else {
                    window.location.assign('/apply');
                  }
                  onItemClick();
                }}
                className="btn-hover-effect block w-full rounded-xl bg-springBlue py-3 text-center text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {applicationsNotYetOpen() ? 'Get notified' : 'Apply'}
              </button>
            </div>
          </div>
        </div>

        {/* Applications Closed Dialog */}
        <ApplicationsClosedDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </motion.div>
    </>
  );
};

export default MobileNavigation;
