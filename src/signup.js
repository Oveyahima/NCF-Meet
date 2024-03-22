import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Link,  useNavigate  } from 'react-router-dom';
import { database, ref, get, set } from './firebase.js';

function Signup() {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
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

                    // Show alert messages here
                    if (isAddressPresent) {
                        alert('You are already registered.');
                    } else {
                        // Store the wallet address in Firebase
                        await set(walletAddressRef, true);
                        alert('Wallet address stored successfully.');
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
            <div className=' flex bg-white w-[40%] h-[90%] rounded-2xl'>
                <div>
                    <p className='mt-[80%] font-bold font-mono text-5xl ml-[50%]'>Connect</p>
                    <p className=' font-bold font-mono text-3xl ml-[75%]'>Wallet</p>
                    <button className="bg-[#9F47F7] px-16 py-4 mt-8 ml-[50%] text-white rounded-2xl text-xl font-bold font-mono" onClick={handleConnectWallet}>SignUp</button>
                </div>
                <div className='px-[33%]'>
                    <div className='bg-[#9F47F7] rounded-tr-2xl rounded-br-2xl h-[100%] w-[190%] mb-[100%]'>
                        <p className='text-center  font-bold text-5xl pt-[45%]'>Hello Folks</p>
                        <p className='text-center font-bold font-mono text-sm'>If You Already signin click here</p>
                        <Link to="/Login">
                            <button className="bg-white px-16 py-4 mt-8 ml-[25%] text-black rounded-2xl text-xl font-bold font-mono">SignIn</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
