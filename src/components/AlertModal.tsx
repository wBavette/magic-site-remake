import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal = ({ isOpen, onClose }: AlertModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop animate-fade-in">
      <div className="gradient-alert rounded-2xl p-8 max-w-lg mx-4 relative shadow-2xl animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <span>⚠️</span>
            LE SITE PEUT SAUTER À TOUT MOMENT
            <span>⚠️</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-semibold mb-6 flex items-start gap-2">
            <span>📢</span>
            Rejoins vite notre canal secours pour être toujours informé !!
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-card/90 transition-colors"
          >
            Rejoins ici !
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
