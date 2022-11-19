import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { post } from '../store/api';
import { setProfile } from '../store/state/authSlice';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        if (localStorage.getItem("crmSite")) {
          const token = localStorage.getItem("crmSite");
          const { data } = await post(`/refresh`, { refreshToken: token });
          dispatch(setProfile(data.data));
          sessionStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem(
            "crmSite",
            JSON.stringify({ refreshToken: data.refreshToken })
          );
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);
  return { loading };
}

export default useAuth