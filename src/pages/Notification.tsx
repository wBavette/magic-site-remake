import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";

const Notification = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const redirectUrl = searchParams.get("redirect") || "/";
  const [hasJoined, setHasJoined] = useState(false);

  const handleJoinTelegram = () => {
    window.open("https://t.me/+wqmOyqn9IGkwYTJk", "_blank");
    setHasJoined(true);
  };

  const handleContinue = () => {
    window.open(redirectUrl, "_blank");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-border/50 rounded-2xl p-6 sm:p-8 text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <Send className="w-8 h-8 text-primary" />
        </div>

        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            Rejoignez notre Telegram
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Pour accéder au contenu, vous devez d'abord rejoindre notre communauté Telegram.
          </p>
        </div>

        <div className="space-y-3">
          {!hasJoined ? (
            <button
              onClick={handleJoinTelegram}
              className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Rejoindre Telegram
            </button>
          ) : (
            <button
              onClick={handleContinue}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
            >
              Continuer vers le stream
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={() => navigate("/")}
            className="w-full text-muted-foreground hover:text-foreground text-sm py-2 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
