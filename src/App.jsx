import React, { useState } from 'react';
import mistLogo from './assets/download.png';
function App() {
  const [name, setName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bestDomain, setBestDomain] = useState(null);
  const [yesClicked, setYesClicked] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handleRegNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 9) {
      setRegNumber(value);
    }
  };

  const handleYesClick = () => {
    setBestDomain('yes');
    setYesClicked(true);
  };

  const handleNoClick = () => {
    setBestDomain('no');
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="bg-zinc-800 py-4 px-6 md:px-10">
        <header className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* TODO: After adding your logo and uncommenting the import,
              delete the div below and uncomment the <img> tag. */}
          
          <img src={mistLogo} alt="MIST Logo" className="w-28 h-auto" /> 
          <p className="text-right text-sm text-gray-400 max-w-xs">
            Name, Reg Number, Contact Number of person submitting
          </p>
        </header>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 p-6 md:p-10 mt-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg">Enter Name</label>
            <span className="text-sm text-gray-400">(Should be letters only)</span>
            <input
              id="name" type="text" value={name} onChange={handleNameChange}
              className="bg-gray-500 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="regNumber" className="text-lg">Enter Reg Number</label>
            <span className="text-sm text-gray-400">(Should be 9 numbers only)</span>
            <input
              id="regNumber" type="text" value={regNumber} onChange={handleRegNumberChange}
              className="bg-gray-500 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="birthday" className="text-lg">Enter birthday</label>
            <span className="text-sm text-gray-400">(Use react calendar form validation here)</span>
            <input
              id="birthday" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)}
              className="bg-gray-500 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg">Is webdev the best domain? :)</p>
            <div className="flex gap-4">
              <button onClick={handleYesClick} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded transition-transform transform hover:scale-105">
                Yes
              </button>
              {!yesClicked && (
                <button onClick={handleNoClick} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded transition-transform transform hover:scale-105">
                  No
                </button>
              )}
            </div>
            <p className="text-sm text-gray-400">(On clicking green here, the red on the sheet disappears and only green yes visible)</p>
          </div>
        </div>

        <div className="bg-white text-black p-8 rounded-lg flex items-center justify-center">
          <div className="w-full max-w-md space-y-5">
            <h2 className="text-center font-bold text-xl mb-8">MIST Mancomm Member 69</h2>
            <p>My name is <span className="font-semibold">{name}</span></p>
            <p>My registration number is <span className="font-semibold">{regNumber}</span></p>
            <p>My birthday is on <span className="font-semibold">{formatDisplayDate(birthday)}</span></p>

            <div className="pt-8 text-center">
              <p>Is webdev the best domain? :)</p>
              <div className="flex justify-center items-center mt-4 h-16">
                {bestDomain === 'yes' && (
                  <div className="bg-green-500 text-white font-bold py-4 px-12 rounded-lg text-lg">
                    YES
                  </div>
                )}
                {bestDomain === 'no' && (
                  <div className="bg-red-500 text-white font-bold py-4 px-12 rounded-lg text-lg">
                    NO
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

