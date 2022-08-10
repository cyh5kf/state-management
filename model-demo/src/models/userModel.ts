import { useState, useEffect } from 'react';
// import { getUser } from '@/services/user';
 
export default () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // getUser().then((res) => {
    //   setUser(res);
    //   setLoading(false);
    // });
  }, []);
 
  return {
    user,
    loading,
  };
};