import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import techData from '../public/technologies.json'; 

interface Tech {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function App() {
  const [technologies] = useState<Tech[]>(techData);
  const [selectedStack, setSelectedStack] = useState<Tech[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
   
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToStack = (tech: Tech) => {
    if (selectedStack.some((item) => item.id === tech.id)) return;
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemoveFromStack = (id: string, name: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.error(`${name} removed!`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-12 font-sans">
      <Navbar selectedCount={selectedStack.length} />
      <Banner />

      <main className="max-w-7xl mx-auto px-4 mt-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Available Technologies</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              
              {loading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-white p-5 rounded-2xl border border-gray-200 animate-pulse flex flex-col justify-between h-[230px]"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                          <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="w-1/2 h-5 bg-gray-200 rounded mb-3"></div>
                        <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                        <div className="w-3/4 h-3 bg-gray-200 rounded mb-4"></div>
                        <div className="flex gap-2">
                          <div className="w-14 h-4 bg-gray-200 rounded"></div>
                          <div className="w-20 h-4 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="w-full h-9 bg-gray-200 rounded-xl"></div>
                    </div>
                  ))
                : technologies.map((tech) => {
                    const isSelected = selectedStack.some((item) => item.id === tech.id);

                    return (
                      <div
                        key={tech.id}
                        className={`bg-white p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg ${
                          isSelected ? 'border-pink-300 ring-1 ring-pink-300' : 'border-gray-200'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                            <span className="bg-pink-50 text-pink-600 text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                              {tech.badge}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>

                          <p className="text-gray-500 text-xs my-2 leading-relaxed min-h-[36px]">
                            {tech.description}
                          </p>

                          <div className="flex items-center space-x-2 my-3 text-[11px]">
                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                              {tech.category}
                            </span>
                            <span className="text-gray-500">{tech.difficulty}</span>
                            <span className="text-amber-500 font-bold ml-auto">★ {tech.rating}</span>
                          </div>
                        </div>

                        {isSelected ? (
                          <button
                            disabled
                            className="w-full bg-pink-50 text-pink-600 font-semibold py-2 rounded-xl text-sm flex items-center justify-center gap-1 cursor-default"
                          >
                            ✓ Added to Stack
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAddToStack(tech)}
                            className="w-full bg-[#0f172a] hover:bg-slate-800 text-white font-medium py-2 rounded-xl text-sm transition-colors"
                          >
                            Add to Stack
                          </button>
                        )}
                      </div>
                    );
                  })}
            </div>
          </div>

        
          <div className="lg:col-span-1">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 sticky top-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
              <p className="text-xs text-gray-400 mb-4">{selectedStack.length} Technology Selected</p>

              {selectedStack.length === 0 ? (
                <p className="text-gray-400 text-xs text-center py-6">No technology selected yet.</p>
              ) : (
                <div className="space-y-3">
                  <div className="max-h-[380px] overflow-y-auto space-y-2 pr-1">
                    {selectedStack.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                        <div className="flex items-center space-x-3">
                          <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                          <div>
                            <p className="font-bold text-xs text-gray-800">{item.name}</p>
                            <p className="text-[10px] text-gray-400">{item.category}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFromStack(item.id, item.name)}
                          className="text-gray-400 hover:text-red-500 text-lg font-light leading-none px-1"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleRemoveAll}
                    className="w-full mt-4 border border-red-200 text-red-500 hover:bg-red-50 font-semibold py-2 rounded-xl text-xs transition-colors"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
    
  );
}

export default App;