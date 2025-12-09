import React from 'react';
import { Screen, Order } from '../types';
import { SuccessCheckIcon } from './Icons';

interface OrderSuccessScreenProps {
  setScreen: (screen: Screen) => void;
  latestOrder: Order | null;
}

const OrderSuccessScreen: React.FC<OrderSuccessScreenProps> = ({ setScreen, latestOrder }) => {
  if (!latestOrder) {
    return (
      <div className="bg-slate-100 dark:bg-slate-950 h-full flex flex-col justify-center items-center text-center p-6 transition-colors duration-300">
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-4">Ocorreu um erro ao exibir o resumo do pedido.</p>
        <button
          onClick={() => setScreen(Screen.Home)}
          className="w-full max-w-xs bg-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors shadow-lg"
        >
          VOLTAR AO INÍCIO
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-950 h-full flex flex-col justify-between items-center text-center p-6 animate-fade-in overflow-y-auto transition-colors duration-300">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center my-8">
          <SuccessCheckIcon />
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mt-4">Pedido Realizado com Sucesso!</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Obrigado por comprar conosco.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-left w-full transition-colors duration-300">
          <h2 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-3 border-b dark:border-slate-700 pb-2">Resumo do Pedido</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">Número do Pedido:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">#{latestOrder.id.slice(-6)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">Total Pago:</span>
            <span className="font-bold text-pink-500">R$ {latestOrder.total.toFixed(2)}</span>
          </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-slate-500 dark:text-slate-400">Forma de Pagamento:</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">{latestOrder.paymentMethod}</span>
          </div>
          <div className="border-t dark:border-slate-700 pt-2">
              {latestOrder.items.map(item => (
                <div key={item.cupcake.id} className="flex justify-between text-sm text-slate-600 dark:text-slate-400 py-1">
                    <span>{item.quantity}x {item.cupcake.name}</span>
                    <span className="font-medium">R$ {(item.quantity * item.cupcake.price).toFixed(2)}</span>
                </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
          <button
          onClick={() => setScreen(Screen.Home)}
          className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors shadow-lg"
        >
          VOLTAR AO INÍCIO
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessScreen;
