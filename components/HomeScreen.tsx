import React, { useRef } from 'react';
import { Screen } from '../types';
import { LogoIcon, ProfileIcon, CupcakeIcon, BasketIcon, StarIcon, CommentIcon } from './Icons';

interface HomeScreenProps {
  setScreen: (screen: Screen) => void;
}

const NavButton: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void }> = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="flex items-center w-full p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:bg-pink-50 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-100 dark:border-slate-700">
    <div className="text-pink-500">{icon}</div>
    <span className="ml-4 text-lg font-semibold text-slate-700 dark:text-white">{label}</span>
  </button>
);


const HomeScreen: React.FC<HomeScreenProps> = ({ setScreen }) => {
  const pressTimer = useRef<number | null>(null);

  const handlePressStart = () => {
    pressTimer.current = window.setTimeout(() => {
      setScreen(Screen.AdminLogin);
    }, 1500); // 1.5 second press
  };

  const handlePressEnd = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };


  return (
    <div className="p-6 space-y-6 bg-slate-100 dark:bg-slate-950 flex flex-col h-full overflow-y-auto transition-colors duration-300">
      <div className="flex justify-center py-4">
        <div 
          className="w-28 h-28 bg-white dark:bg-slate-800 rounded-full shadow-lg cursor-pointer overflow-hidden ring-4 ring-white dark:ring-slate-700"
          onMouseDown={handlePressStart}
          onMouseUp={handlePressEnd}
          onTouchStart={handlePressStart}
          onTouchEnd={handlePressEnd}
          title="Pressione e segure para abrir o painel do admin"
        >
            <LogoIcon className="w-full h-full" />
        </div>
      </div>
      
      <div className="space-y-4">
        <NavButton icon={<ProfileIcon className="h-8 w-8" />} label="PERFIL" onClick={() => setScreen(Screen.Profile)} />
        <NavButton icon={<CupcakeIcon className="h-8 w-8" />} label="SABORES" onClick={() => setScreen(Screen.Flavors)} />
        <NavButton icon={<BasketIcon className="h-8 w-8" />} label="MEUS PEDIDOS" onClick={() => setScreen(Screen.Orders)} />
      </div>

      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md transition-colors duration-300">
        <h3 className="text-center font-bold text-slate-600 dark:text-slate-300 mb-2">AVALIAÇÕES</h3>
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < 4} />)}
        </div>
      </div>
      
      <div className="flex-grow"></div>

      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md mt-auto transition-colors duration-300">
        <div className="flex items-center mb-3">
          <CommentIcon className="h-6 w-6 text-pink-500" />
          <span className="ml-2 font-semibold text-slate-700 dark:text-white">CONTATO</span>
        </div>
        <textarea className="w-full p-2 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-pink-400 focus:border-transparent transition placeholder:text-slate-400 dark:placeholder:text-slate-400" rows={2} placeholder="Deixe seu comentário..."></textarea>
        <button className="w-full mt-2 bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors">
          ENVIAR
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
