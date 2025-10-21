import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSeacrh } from '../utils/gptSlice';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user);
    const  showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleGptToggle = (e) => {
        e.stopPropagation()
        dispatch(toggleGptSeacrh())
    }
    const handleRender = (e) => {
        e.stopPropagation();  
        navigate("/");
    };

    const handleLanguageChange = (e) => {
       dispatch(changeLanguage(e.target.value))
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                // navigate("/");
            })
            .catch((error) => {
                // console.error("Sign-out error:", error); // Log the error
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/"); 
          }
        });
    
        // Unsiubscribe when component unmounts
        return () => unsubscribe();
      }, []);
    
    return (
        <div 
            className='absolute w-screen z-10 py-4 md:py-0 md:px-6 bg-gradient-to-b from-black flex  md:flex-row justify-between'
            onClick={handleRender}
        >
            <img 
                className='md:w-32 md:h-24 w-16 h-12 md:mx-0 cursor-pointer mx-6'
                src={LOGO} 
                onClick={() => {navigate("/")}}
                alt="Netflix Logo" 
            />
            {user && (
                <div className='justify-between flex p-2'>
                    { showGptSearch &&<select className='p-4 bg-gray-900 text-white m-4 hidden rounded-lg cursor-pointer focus:outline-none active:scale-100 md:inline-block' onChange={handleLanguageChange} onClick={(e) => e.stopPropagation()}>
                        {SUPPORTED_LANGUAGE.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                }
                    
                    <button className='bg-purple-800 text-white md:mx-4 md:p-2 py-1 px-2 md:my-4 rounded-md hover:opacity-80 active:scale-95 ' onClick={handleGptToggle}>{!showGptSearch ? "GPT Search": "HomePage"}</button>
                    <img className='hidden md:inline-block w-12 h-12 m-4 rounded-lg' src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="User Icon" />
                    <button className='bg-gray-400 md:px-4 px-2 py-1 mx-2 md:my-4 rounded-lg md:inline-block font-semibold text-white ' onClick={handleSignOut}>
                        Sign out
                    </button>
                </div> 
            )}
        </div>
    );
};

export default Header;
