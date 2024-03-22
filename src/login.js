import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { BrowserRouter as Router, Link,  useNavigate } from 'react-router-dom';
import { database, ref, get } from './firebase.js';



function Login() {
    const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [isAddressInDatabase, setIsAddressInDatabase] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleConnectWallet = async () => {
    try {
      if (window.ethereum) {
        setLoading(true);

        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const web3Instance = new Web3(window.ethereum);
        const accounts = await web3Instance.eth.getAccounts();
        setWeb3(web3Instance);
        setAccount(accounts[0]);

        // Note: Do not check the database here
      } else {
        console.error('Web3 not detected. Please install MetaMask or another wallet provider.');
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (account) {
      const checkDatabase = async () => {
        try {
          // Check if the wallet address is in the database
          const walletAddressRef = ref(database, 'Users/' + account);
          const snapshot = await get(walletAddressRef);
          const isAddressPresent = snapshot.exists();
          setIsAddressInDatabase(isAddressPresent);

          // Show alert messages here
          if (isAddressPresent) {
            navigate('/Main', { state: { account } });
          }
        } catch (error) {
          console.error('Error checking database:', error);
        }
      };

      checkDatabase();

      // Log the connected wallet address to the console
      console.log('Connected to wallet. Address:', account);
    }
  }, [account]);

    return (
        <div className='bg-gradient-to-r from-gray-200 to-indigo-200 min-h-screen flex flex-col items-center justify-center'>
            <div className=' flex bg-white w-[45%] h-[50%] rounded-2xl'>
                    <div className='bg-[#9F47F7] rounded-tl-2xl rounded-bl-2xl w-[45%] '>
                        <p className='text-center  font-bold text-5xl pt-[45%]'>Hello Folks</p>
                        <p className='text-center font-bold font-mono text-sm'>If You not regsitered yet! click here</p>
                        <Link to="/Signup">
                            <button className="bg-white px-16 py-4 mt-8 ml-[25%] text-black rounded-2xl text-xl font-bold font-mono mb-[50%]">SignUp</button>
                        </Link>
                    
                </div>
                <div>
                    <p className='mt-[80%] font-bold font-mono text-5xl ml-[50%] '>Connect</p>
                    <p className=' font-bold font-mono text-3xl ml-[75%]'>Wallet</p>
                    <button className="bg-[#9F47F7] px-16 py-4 mt-8 ml-[50%] text-white rounded-2xl text-xl font-bold font-mono" onClick={handleConnectWallet}>SignIn</button>
                </div>
            </div>
        </div>
    );
}

export default Login;

