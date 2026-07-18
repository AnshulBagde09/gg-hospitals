import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Lock, X } from "lucide-react";

function ConfidentialModal({ isOpen, onClose, moduleName }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25 }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Close */}

              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X
                  size={20}
                  className="text-slate-500"
                />
              </button>

              {/* Header */}

              <div className="flex flex-col items-center pt-10 px-8">

                <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6">

                  <ShieldAlert
                    size={40}
                    className="text-red-600"
                  />

                </div>

                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">

                  Confidential Module

                </h2>

                <p className="mt-4 text-center text-slate-500 leading-7">

                  <strong>{moduleName}</strong> is currently restricted and
                  under development.

                </p>

                <div className="mt-6 flex items-center gap-2 text-blue-600 font-medium">

                  <Lock size={18} />

                  Authorized Personnel Only

                </div>

              </div>

              {/* Footer */}

              <div className="px-8 py-8">

                <button
                  onClick={onClose}
                  className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                >
                  Close
                </button>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ConfidentialModal;