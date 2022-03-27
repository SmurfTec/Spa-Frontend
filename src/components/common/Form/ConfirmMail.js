import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { confirmMail } from 'store/slices/Auth/extraReducers';
import Loading from '../Loading';

const ConfirmMail = () => {
  const { isLoggedIn, loading } = useSelector((st) => st.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useParams();

  let redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    dispatch(confirmMail(token)).then((val) => {
      if (!val.error) navigate('/login');
      else {
        navigate('/');
      }
    });
  }, [dispatch, navigate, token]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirect || '/');
    }
  }, [isLoggedIn, navigate, redirect]);

  return loading && <Loading />;
};

export default ConfirmMail;
